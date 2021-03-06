const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateHTML = require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = []

//initializes app
function addManager() {
  inquirer.prompt([
    {
      type: 'input',
      name: "managerName",
      message: "What is the manager's name?"
    },
    {
      type: 'input',
      name: "managerId",
      message: "What is the Manager's ID?"
    },
    {
      type: 'input',
      name: "managerEmail",
      message: "What is the manager's email?"
    },
    {
      type: 'input',
      name: "managerGithub",
      message: "What is the manager's GitHub?"
    },
  ]).then((managerResponse) => {
    const name = managerResponse.managerName
    const id = managerResponse.managerId
    const email = managerResponse.managerEmail
    const github = managerResponse.managerGithub
    const manager = new Manager(name, id, email, github)
      teamArray.push(manager)

    buildTeam()
  });
};

function buildTeam(){
  inquirer.prompt([
    {
      type: 'list',
      name: "role",
      message: "Who would you like to add?",
      choices:[ 
        "Engineer", 
        "Intern", 
        "I'm done"
      ]
    }
  ]).then((data)=>{
    switch(data.role){
      case "Engineer":
        addEngineer();
      break;
      case "Intern":
        addIntern();
      break;
      default:
        createHtml()
    }
  })
}

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: "engineerName",
      message: "What is the engineer's name?"
    },
    {
      type: 'input',
      name: "engineerId",
      message: "What is the engineer's ID?"
    },
    {
      type: 'input',
      name: "engineerEmail",
      message: "What is the engineer's email?"
    },
    {
      type: 'input',
      name: "engineerGithub",
      message: "What is the engineer's GitHub?"
    },
  ]).then((engineerResponse) => {
    const name = engineerResponse.engineerName
    const id = engineerResponse.engineerId
    const email = engineerResponse.engineerEmail
    const github = engineerResponse.engineerGithub
    const engineer = new Engineer(name, id, email, github)
      teamArray.push(engineer)
      
      buildTeam()
  });
};

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: 'input',
      name: "internId",
      message: "What is the intern's ID?"
    },
    {
      type: 'input',
      name: "internEmail",
      message: "What is the intern's email?"
    },
    {
      type: 'input',
      name: "internSchool",
      message: "What is the intern's school?"
    },
  ]).then((internResponse) => {
    const name = internResponse.internName
    const id = internResponse.internId
    const email = internResponse.internEmail
    const school = internResponse.internSchool
    const intern = new Intern(name, id, email, school)
      teamArray.push(intern)

      buildTeam()
  });
};

//writes HTML file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function createHtml(){
  generateHTML(teamArray);
  console.log(teamArray);
  
  fs.writeFile('teamprofile.html', data, (err) => {
    if (err) {
      console.log(err);
    // when the profile has been created 
    } else {
      console.log("Your team profile has been successfully created! Please check out the index.html")
      }
    })
};

addManager();