import os
import shutil
import subprocess
from datetime import datetime


def date_format():
    return datetime.now().strftime("%Y-%m-%d_%H-%M-%S")


if __name__ == '__main__':
    BASE_DIR = os.getcwd()

    # test script directory
    test_dir = os.path.join(BASE_DIR, 'cypress/e2e')

    # browsers to run tests on
    browsers = ["chrome", "edge"]

    # output directory for reports
    reports_dir = os.path.join(BASE_DIR, 'reports')

    # npx executable path
    npx_path = shutil.which('npx')

    for browser in browsers:
        # create browser-specific report directory
        browser_report_dir = os.path.join(reports_dir, browser)
        os.makedirs(browser_report_dir, exist_ok=True)

        # run tests and generate report for each spec file
        for spec_file in os.listdir(test_dir):
            if spec_file.endswith(".cy.js"):
                spec_file_path = os.path.join(test_dir, spec_file)
                report_file = f"{spec_file[:-3]}_{browser}_{date_format()}.html"
                report_path = os.path.join(browser_report_dir, report_file)

                subprocess.run([
                    f"{npx_path}",
                    "cypress",
                    "run",
                    "--browser",
                    f"{browser}",
                    "--spec",
                    f"{spec_file_path}",
                    "--reporter",
                    "mochawesome",
                    "--reporter-options",
                    f"reportDir={browser_report_dir},reportFilename={report_file}"
                ])

                print(f"Report generated: {report_path}")

    # for browser in browsers:
    #     subprocess.run([f"{npx_path}", "cypress", "run", "--browser", f"{browser}", "--spec", f"{test_dir}"])
