# team-profile-generator

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Description
The Team Profile Generator is a tool for a manager to create a page that will display their entire team's basic information. This can be used by the entire team to access basic information on each individual on the team. The page will display information like team members names, email addresses, GitHub usernames, and employee IDs. 

## Usage
To use the Team Profile Generator, clone the repository onto your own device and install the necessary packages by running the following commands:
* npm install
* npm i inquirer
* npm i jest (this is run tests)

To run the application, run "node index.js" in your terminal. Follow the question prompt to add a manager, engineers, and interns. Once you are done adding employees, an index.html file will populate the information you entered. 

