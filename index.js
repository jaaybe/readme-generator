const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your web application? (Required)',
      validate: function(title) {
        if (title === '') {
          console.log('\n Title is required.')
          return false;
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your application'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions for your application'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter a description of the usage for your application'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List any collaborators for your application'
    },
    {
      type: 'list',
      message: 'What license would you like to use for your application?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" license'
        , 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal'
        , 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0'
        , 'GNU Lesser General Public License v2.1', 'Mozilla Public License v2.0', 'The Unlicense'],
      default: 'MIT License'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please enter your contribution guidelines'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter the test instructions for your application'
    },
    {
      type: 'checkbox',
      message: 'What Technologies did you use?',
      name: 'tech',
      choices: ['HTML', 'CSS', 'JavaScript', '3rd Party API', 'JS Node', 'SQL']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub Username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email Address?'
    }
  ])
  

  .then(function (answers) {
    console.log(answers)
    fs.writeFile('README.md', generatePage(answers), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log('README file created!');
    });
  });