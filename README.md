# Cypress Setup Guide for Windows

### Prerequisites
- Node.js 
- npm (Node Package Manager)    

Download and install them from the official Node.js website: https://nodejs.org/en/download/

### Step 1: Create a project directory
Open a command-line interface (CLI) such as Command Prompt or PowerShell.  
- Create a new directory for your project and navigate into it:
````
mkdir <project-directory>
cd ./path/to/<project-directory>
````
- Initialize a new Node.js project:
````
npm init -y
````
### Step 2: Install Cypress
- Install Cypress as a dev dependency: 
````
npm install cypress --save-dev
````
- OR, with specified version of Cypress:
````
npm install cypress@12.7.0 --save-dev
````
Cypress should be available in the `node_modules` folder inside the project directory
### Step 3: Verify Cypress
- Verify Cypress using `npx`: 
````
npx cypress verify
````
### Step 4: Run Cypress
- Open Cypress: 
````
npx cypress open
````
This will open the Cypress Test Runner, where you can run your tests and see the results.

### Writing Tests
Tests should be written in the `cypress/integration` folder. You can create your first test by creating a new file in this folder with the extension .spec.js.
For more information on how to write tests with Cypress, refer to the official [Cypress documentation](https://docs.cypress.io/guides/getting-started/writing-your-first-test).

### Troubleshooting
If you run into any issues during the installation or setup process, refer to the official [Cypress troubleshooting guide](https://docs.cypress.io/guides/references/error-messages) for help.

### Congratulations!  
You have successfully set up Cypress on Windows and are now ready to start writing and running tests. Happy testing!
