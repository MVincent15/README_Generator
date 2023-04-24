const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateReadMe')
let fileName = 'README.md';

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaing the project (the what, the why, and the how)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide an in-depth description of the required installation steps for the project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the collaborators, if any.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will your project have',
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "BSD",
            "LGPL",
            "AGPL",
            "Unlicensed",
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidlines for contributing to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions/examples on how to run tests',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GITHUB username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    ]);
};

const writeToFile = (fileName, data) => {
    let outputConsole = function (err) {
        if(err) {
            return console.log(err)
        } else {
        console.log('Successfully wrote to README.md')
        };
    }
    fs.writeFile(fileName, generateREADME(data), outputConsole );
}


const init = () => {
    questions()
        .then((data) => writeToFile(fileName,data));
}


init();
