//name, id, email, getName(), getId(), getEmail(), GitHub username, getGithub(), getRole() Overridden to return 'Engineer'
const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
