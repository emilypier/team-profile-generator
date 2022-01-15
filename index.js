// name, id, email, getName(), getId(), getEmail(), getRole() Returns 'Employee'
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

const team = []

//writes html file
// function writeToFile(fileName, data) {
//   fs.writeFileSync(path.join(process.cwd(), fileName), data);
// };

//initializes app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: "managerName",
      message: "what is the managers name"
    }
  ]).then((userResponse) => {
  const manager = new Manager(userResponse.managerName)
    team.push(manager)

    buildTeam()
    // writeToFile('template.html', generateMarkdown({ ...userResponse }))
  });
};

function buildTeam(){
  inquirer.prompt([
    {
      type: 'list',
      name: "userChoice",
      message: "Who would you like to add?",
      choices:[ 
        "Engineer", 
        "Intern", 
        "Im done"
      ]
    }
  ]).then((data)=>{
    switch(data.userChoice){
      case "Engineer":

      break;
      case "Intern":

      break;
      default:
        createHtml()
    }
  })
}

function createHtml(){
  console.log(team) //message vinnie
  
}

init();
