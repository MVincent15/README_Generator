renderLicenseBadge = (license) => {
  if (license === 'Unlicensed') {
    return '';
  } else {
    return `![${license}](https://img.shields.io/badge/license-${license}-green)`
  };
};


renderLicenseSection = (license) => {
  if (license === 'Unlicensed'){
    return 'This project does not use a license';
  } else {
    return `This project uses the ${data.license} license.` 
  }
}

// TODO: Create a function to generate markdown for README
generateReadMe = (data) => {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [License]{#license}
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation 
  ${data.installation}

  ##Usage
  ${data.usage}

  ## Credits 
  ${data.credits}

  ## License 
  ${renderLicenseSection(data.license)}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  To run tests, see the below instructions:
  ${data.tests}

  ## Questions 
  If you have any questions about this repo please contact me directly at ${data.email}. You can also see my work in GitHUb at (https://ww.github.com/${data.username}).

`;
}

module.exports = generateReadMe;
