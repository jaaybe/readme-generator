
module.exports = answers => {
    // console.log(answers);
const { title, description, installation, usage, credits, license, contributing, tests, tech, github, email } = answers;

    return `
# ${title}

## Description

${description} 
Technologies used:
${tech}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${installation}


## Usage 

${usage} 


## Credits

${credits}


## License

${license}

![GitHub license](https://img.shields.io/badge/license-${license.split(' ')[0]}-blue.svg)


## Contributing

${contributing}. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.


## Tests

${tests}

       
## Questions

If you have any questions, please email JB Blot at: ${email}

If you'd like to clone or explore the app repository, it is available on GitHub:
https://github.com/${github}/
    `;

};