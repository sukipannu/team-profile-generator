const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');
const fs = require('fs');
const pageTemplate = require('./dist/pageTemplate');
const e = require('express');

// employee array
var employees =[];

//Make manager profile
const managerProfile = function () {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You need to enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You need to enter an ID.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is this employees email address?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You need to enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the office number for this employee?',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log('You need to enter an office number.');
                    return false;
                }
            }
        },
    ])

    //takes profile data to the menu
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
    })
};

//Menu page
const menu = function () {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee would you like to add?',
            name: 'role',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'text',
            name: 'name',
            message: 'What is the employees name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter an employee name.');
                    return false;
                }
            }
        },
        {
           type: 'text',
           name: 'id',
           message: 'What is the employee ID?',
           validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('You need to enter an ID.');
                return false;
            }
           } 
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is this employees email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is this employees email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'What is the employees GitHub username?',
            when: (input) => input.role === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You need to enter a GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Which school does the intern attend?',
            when: (input) => input.role === 'Intern',
            validate: school => {
                if (school) { 
                    return true;
                } else {
                    console.log('You need to enter a school name.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeesData => {
        let { name, id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role  === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employees.push(employee);

        if(confirmAddEmployee) {
            return menu(employees)
        } else {
            return employees;
        }
    })
};

managerProfile()
.then(menu)
.then(data => {
    const pageHTML = pageTemplate(data)

    fs.writeFile('./index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The page is created! Go to index.html")
        }
    })
});
