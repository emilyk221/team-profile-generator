const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/html-template");

// define main menu options
const menuPrompt =
  {
    type: "list",
    name: "menu",
    message: "What would you like to do now? (Select One)",
    choices: ["Add an engineer", "Add an intern", "Finish building team"],
    default: 0
};

const mainMenu = teamInfo => {
  return inquirer.prompt(menuPrompt)
  .then(menuResponse => {
    if (menuResponse.menu === "Add an engineer") {
      promptEngineer(teamInfo);
      return false;
    }
    else if (menuResponse.menu === "Add an intern") {
      promptIntern(teamInfo);
      return false;
    }
    else if (menuResponse.menu === "Finish building team") {
      return generatePage(teamInfo);
    }
  })
  .then(distHTML => {
    if (distHTML) {
      return writeToFile("./dist/index.html", distHTML);
    }
    else {
      return false;
    }
  })
  .catch(err => {
    console.log(err);
  });
}

// ask initial questions about team manager
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
  ])
  .then(teamInfo => {
    return mainMenu(teamInfo);
  });
}

// prompt questions about an engineer employee
const promptEngineer = teamInfo => {
  if (!teamInfo.engineers) {
    teamInfo.engineers = [];
  }
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
  .then(engineerInfo => {
    teamInfo.engineers.push(engineerInfo);
    return mainMenu(teamInfo);
  });
}

// prompt questions about an intern employee
const promptIntern = teamInfo => {
  if (!teamInfo.interns) {
    teamInfo.interns = [];
  }
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
  .then(internInfo => {
    teamInfo.interns.push(internInfo);
    return mainMenu(teamInfo);
  });
}

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) =>{
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!"
      });
    });
  });
}

promptManager()
 