const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
// const questions = [

  // Prompt the user
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your web application?'
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description of your application'
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please enter the installation instructions for your application'
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please enter a description of the usage for your application'
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Please enter your contribution guidelines'
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Please enter the test instructions for your application'
      },
      {
        type: 'checkbox',
        message: 'What Technologies did you use?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', '3rd Party API', 'JS Node', 'SQL']
      },
      {
        type: 'list',
        message: 'What license would you like to use for your application?',
        name: 'License',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" license'
          , 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'
          , 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0'
          , 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub Username?'
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your Email Address?'
      }
    ])
    // Write the user response to a file by chaining the below callback method to the prompt above.
    .then(function (data) {
      // Generate the name of your user file from their input
      const filename =
        README
          // .split(' ')
          .join('') + '.md';

      fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
          return console.log(err);
        }

        console.log('Success!');
      });
    });

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();









