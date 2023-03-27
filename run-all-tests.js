const cypress = require('cypress');
const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const fs = require('fs');
const path = require('path');

const runTests = async (browserName) => {
  console.log(`Running tests on ${browserName} browser...`);
  const results = await cypress.run({
    spec: 'cypress/e2e/*.cy.js',
    browser: browserName,
    reporter: 'mochawesome', // specify the mochawesome reporter
    reporterOptions: {
      reportDir: 'cypress/reports', // specify the directory for reports
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'YYYY-MM-DD HH:mm:ss',
    },
  });
  if (results.totalFailed > 0) {
    console.error(`${results.totalFailed} tests failed.`);
    process.exit(1);
  }
  console.log(`All tests passed on ${browserName} browser!`);
  return results;
};

(async () => {
  try {
    await runTests('chrome');
    await runTests('edge');
    // Merge the test results from both browsers
    const mergedResults = await merge({
      reportDir: 'cypress/reports',
      files: ['cypress/reports/*.json'],
    });

    // Generate the HTML report from the merged results
    const reportDir = path.join(__dirname, 'cypress', 'reports');
    await generator.create(mergedResults, {
      reportDir,
      reportFilename: 'test-report.html',
      reportTitle: 'Cypress Test Report',
    });

    // Write the raw merged results to a JSON file
    const resultsFile = path.join(reportDir, 'test-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify(mergedResults));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
