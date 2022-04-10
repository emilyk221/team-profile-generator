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
        if (!mIdInput) {
          console.log("Please enter the manager's ID!");
          return false;
        }
        else if (typeof mIdInput !== "number") {
          console.log("The manager's ID must be a number!")
          return false;
        }
        else if (mIdInput) {
          return true;
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
        if (!mOfficeNumInput) {
          console.log("Please enter the manager's office number!");
          return false;
        }
        else if (typeof mOfficeNumInput !== "number") {
          console.log("The manager's office number must be a number!")
          return false;
        }
        else if (mOfficeNumInput) {
          return true;
        }
      }
    }
  ])
}

promptManager();