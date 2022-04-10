const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/html-template");

const menuPrompt = [
  {
    type: "list",
    name: "menu",
    message: "What would you like to do now? (Select One)",
    choices: ["Add an engineer", "Add an intern", "Finish building team"]
  }
];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name? (Required)",
      validate: mNameInput => {
        if (mNameInput) {
          return true;
        }
        else {
          console.log("Please enter the manager's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "managerId",
      message: "Please enter the team manager's employee ID number. (Required)",
      validate: mIdInput => {
        if (mIdInput) {
          return true;
        }
        else {
          console.log("Please enter the manager's ID!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email address? (Required)",
      validate: mEmailInput => {
        if (mEmailInput) {
          return true;
        }
        else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "managerOfficeNum",
      message: "Please enter the team manager's office number. (Required)",
      validate: mOfficeNumInput => {
        if (mOfficeNumInput) {
          return true;
        }
        else {
          console.log("Please enter the manager's office number!");
          return false;
        }
      }
    }
  ]);
}

const promptEngineer = () => {
  return inquirer.prompt ([
    {
      type: "input",
      name: "engName",
      message: "What is the engineer's name? (Required)",
      validate: eNameInput => {
        if (eNameInput) {
          return true;
        }
        else {
          console.log("Please enter the engineer's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "engId",
      message: "Please enter the engineer's employee ID number. (Required)",
      validate: eIdInput => {
        if (eIdInput) {
          return true;
        }
        else {
          console.log("Please enter the engineer's ID!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "engEmail",
      message: "What is the engineer's email address? (Required)",
      validate: eEmailInput => {
        if (eEmailInput) {
          return true;
        }
        else {
          console.log("Please enter the engineer's email!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "engGithub",
      message: "What is the engineer's GitHub username?"
    }
  ])
}

const promptIntern = () => {
  return inquirer.prompt ([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name? (Required)",
      validate: iNameInput => {
        if (iNameInput) {
          return true;
        }
        else {
          console.log("Please enter the intern's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "internId",
      message: "Please enter the intern's employee ID number. (Required)",
      validate: iIdInput => {
        if (iIdInput) {
          return true;
        }
        else {
          console.log("Please enter the intern's ID!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email address? (Required)",
      validate: iEmailInput => {
        if (iEmailInput) {
          return true;
        }
        else {
          console.log("Please enter the intern's email!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the name of the school the intern attends?"
    }
  ])
}

promptManager();