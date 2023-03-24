## About The Project
![Software][software-screenshot]
The project implements Cypress (JavaScript-based testing tool/framework), 
in order to conduct end-to-end (E2E) testing on any client owned test environment. 

Using this project, the QA team will be responsible for:

* Verifying the working order of a software product in a start-to-finish process
* Testing from the end user’s experience by simulating real user scenarios
* Validating the system under test and its components for integration and data integrity
* Reporting the results considered to be bugs and fixes

Additionally, this project will allow the team to test the web application on different browsers.


### Built With
The following frameworks/languages/libraries are used to bootstrap this project.

[![Cypress][Cypress]][Cypress-url] [![JavaScript][JavaScript]][JavaScript-url] [![Python][Python]][Python-url] [![HTML][HTML]][HTML-url]


## Getting Started

Here gives you instructions on setting up your project locally.

1. Clone the repository:
   ````
   git clone https://github.com/Amanimal/cypress-js.git
   ````
2. Install dependencies, using terminal:
   ````
   cd ./cypress-js npm install
   ````
3. Verify Cypress is installed, using terminal:
   ````
   npx cypress verify
   ````
4. Ensure the project contains the following directories/files:
   
   a. Create ```\reports``` directory if unavailable, where generated reports are stored for all 
   tests ran on different browsers <br/>
   b. ```\cypress\screenshots``` directory, contains screenshots of each failed test case <br/>
   c. ```\cypress\videos``` directory, contains videos of each test run 

**NOTE**: Cypress run in headless mode, will automatically create ```\screenshots``` and ```\videos``` directories

## Usage

Use the information below to learn how to run this project. 

### Option 1: Run tests in Cypress Test Runner

1. Open Cypress Test Runner:
   ````
   npx cypress open
   ````
2. Click on **E2E Testing**, which is already configured
   ![cy-test-runner][cy-test-runner]
3. Select a browser and click on **Start E2E Testing** button, for example - Chrome
   ![cy-test-runner2][cy-test-runner2]
4. Click on any ```.cy.js``` file under ```/cypress/e2e``` directory
   ![cy-test-runner3][cy-test-runner3]

   #### This will run the selected ```.cy.js``` on a Chrome instance
   ![cy-test-runner4][cy-test-runner4]

**NOTE**: While running this browser instance, test scripts can be modified using a code editor or an IDE, simultaneously.

### Option 2: Run using Terminal - Command Prompt or Powershell

1. Quick Cypress run:
   ````
   npx cypress run
   ````
2. Run a test script:
   ````
   npx cypress run --spec .\cypress\e2e\login_page.cy.js
   ````
3. Run all test scripts in a specific folder:
   ````
   npx cypress run --spec .\cypress\e2e
   ````
4. Run on a specific browser: <br>
   a. Check browsers available on the current operating system:
   ````
   npx cypress info
   ````
   b. Run a test script on Edge browser:
   ````
   npx cypress run --spec .\cypress\e2e\login_page.cy.js --browser edge
   ````
**NOTE**: 
* By default, Cypress run will launch Chrome in headless mode
* ```chrome```,```edge```, ```electron```arguments is supported on ```--browser``` flag.
* Cypress does not support running tests on Safari.
* Cypress does not support Firefox or Opera out of the box, but plugins can be installed to enable running tests on these browsers.

5. Run tests on Firefox or Opera <br>
    a. Install the plugins:
      ````
      npm install --save-dev cypress-browser-launcher
      npm install --save-dev cypress-browser-opera
      ````
   b. Add the following code to ```cypress/plugins/index.js``` file:
      ````
      const browserLauncher = require('cypress-browser-launcher')

      module.exports = (on, config) => {
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.name === 'firefox') {
            return browserLauncher.detect().then((launchers) => {
              const launcher = launchers.find((l) => l.name === 'Firefox')
              if (!launcher) {
                throw new Error('Cannot find Firefox browser')
              }
              return launcher
            })
          }
        })
      }
      ````
      ````
      const { launch } = require('cypress-browser-opera')

      module.exports = (on, config) => {
        on('before:browser:launch', (browser, launchOptions) => {
          if (browser.name === 'opera') {
            return launch(config, {
              headless: true
            })
          }
        })
      }
    ````
   c. Run tests using ```--browser``` flag with ```firefox``` or ```opera```:
   ````
   cypress run --browser firefox
   cypress run --browser opera
   ````

### Option 3: Run the ```TestSuit.py``` file

Run all tests: By clicking run ```▶```
   ````
   if __name__ == '__main__':
      BASE_DIR = os.getcwd()
      ...
   ````
In the ```TestSuit.py``` file, specify which browser to run:
   ````
   ...
   # browsers to run tests on
   browsers = ["chrome", "edge"]
   ...
   ````
This will run all tests inside ```cypress/e2e``` directory, on all browsers specified.

### Happy Testing!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[software-screenshot]: images/software.png
[cy-test-runner]: images/cy-test-runner.png
[cy-test-runner2]: images/cy-test-runner2.png
[cy-test-runner3]: images/cy-test-runner3.png
[cy-test-runner4]: images/cy-test-runner4.png
[Cypress]: https://img.shields.io/badge/Cypress-17202F?style=for-the-badge&logo=cypress&logoColor=white&labelColor=black&color=black
[Cypress-url]: https://www.cypress.io/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=yellow&labelColor=black&color=black
[JavaScript-url]: https://www.w3schools.com/js/
[Python]: https://img.shields.io/badge/Python-4B8BBE?style=for-the-badge&logo=python&logoColor=blue&labelColor=black&color=black
[Python-url]: https://www.python.org/
[HTML]: https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=orange&labelColor=black&color=black
[HTML-url]: https://www.w3schools.com/html/