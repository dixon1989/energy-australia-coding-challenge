# Energy Australia Coding Challenge

# README

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for?

- Enerygy Australia Coding Challenge to determine next stage of technical interview
- Version 1.0

### How do I get set up?

- Be sure you have node.js installed.
- Make sure you are at the correct directory named ./energy-australia-coding-challenge or root folder.
- You will need to run "npm install" or "yarn" on your terminal depending on your preference.
- To view the history progress of my commits, run "git log" on your terminal.
- To run test you will need to run "npm run test" or "yarn test" on your terminal depending on your preference.
- Run "npm start" or "yarn start" to view the web application on my work.

### Requirements IMPORTANT!!!!!

- Before you run the project. Please access to the following link.
- https://cors-anywhere.herokuapp.com/corsdemo
- Please click the button "Request temporary access to the demo server" until you are able to see the following text "You currently have temporary access to the demo server."
- This is to help trigger a developer mode to be able to display the result data in developer mode.
- Main reason is because the given API https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals seems to be restricted with a CORS Error.
- You will need to access to the link below to request a temporary access to a demo server.
- The only solution that I have found is to run your API together with the demolink server that i have found from the link below.
- https://github.com/Rob--W/cors-anywhere/issues/301
  ![alt text](https://i.postimg.cc/g0zg1Xc4/heroku.png)

### Contribution guidelines

- Developing, Commiting code
- Writing tests code
- Code review
- Documentation
- Code are deployed and develop personally by Dickson Lim

### Stacks Used

- React Typescript
- React Hooks
- Styled-Components
- Jest
- Axios

### Who do I talk to?

- Repo owner or admin - Dickson Lim
- Kindly email to dixon.lim89@gmail.com for any inquiry.

## Coding Test Overview

- https://eacp.energyaustralia.com.au/codingtest

A web service has been setup at the following URL:

- https://eacp.energyaustralia.com.au/codingtest/api-docs/#/festivals/APIFestivalsGet

## The Problem

Your team is tasked with listing out music festival data in a particular manner: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.
For example:

![alt text](https://i.postimg.cc/jSvqN0p3/task.png)
