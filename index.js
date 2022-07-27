const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const generatePage = require("./src/template");
const employeeArray = [];

function begin() {
    this.manager = new Manager();

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the manager's name",
            
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager ID",
            
            
        },
        {
            type: "input",
            name: "email",
            message: "Enter the manager's email",
            
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number",
           
        },
        {
            type: "list",
            name: "addMember",
            message: " Select the type of member you want to add.",
            choices: ["End Program", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, officeNumber, addMember}) => {
        this.manager = new Manager(name, id, email, officeNumber);
        this.manager.role = this.manager.getRole();

        employeeArray.push(this.manager);

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return theEnd(employeeArray);
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name",
            
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID",
           
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email",
            
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username",
            
        },
        {
            type: "list",
            name: "addMember",
            message: "Select the role of the next member of your team",
            choices: ["Finish build", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, github, addMember}) => {
        this.engineer = new Engineer(name, id, email, github);
        this.engineer.role = this.engineer.getRole();

        employeeArray.push(this.engineer);

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return theEnd(employeeArray);
        }
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name",
            
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID",
            
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email",
            
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school",
            
        },
        {
            type: "list",
            name: "addMember",
            message: "Select the role of the next member of your team",
            choices: ["Finish build", "Engineer", "Intern"]
        }
    ]).then(({name, id, email, school, addMember}) => {
        this.intern = new Intern(name, id, email, school);
        this.intern.role = this.intern.getRole();

        employeeArray.push(this.intern);

        switch(addMember) {
            case "Engineer":
                return addEngineer();
            case "Intern":
                return addIntern();
            default:
                return theEnd(employeeArray);
        }
    });
}
const theEnd = data => {
    pageHTML = generatePage(data); 
    writeFile(pageHTML);
    copyFile();
    console.log("Page created!");
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            if(err) {
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

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File copied!"
            });
        });
    });
}

begin();