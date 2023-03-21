import os
import shutil
import subprocess

if __name__ == '__main__':
    BASE_DIR = os.getcwd()
    # test script directory
    test_dir = os.path.join(BASE_DIR, 'cypress/e2e')

    # npx executable path
    npx_path = shutil.which('npx')

    subprocess.run([f"{npx_path}", "cypress", "run", "--spec", f"{test_dir}"])
