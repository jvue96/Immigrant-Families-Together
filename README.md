# Immigrant Families Together
Immigrant Families Together is a volunteer-based organization in America that reunites separated families. The staff is composed entirely of volunteers, many of whom are balancing full-time jobs and families. They currently assist nearly seventy five families in areas ranging from posting bond, finding legal help, and supplying financial assistance.

# Built With 
React, Redux, HTML, CSS, Passport, Axios, Node, Express, Postgres, and more (see package.json for full list of dependencies)

# Getting Started 
Follow instructions below to spin up a copy of this repo on your local machine

# Prerequisites
Software that is required prior to starting the application
-NPM (https://www.npmjs.com/get-npm)
-Node.js (https://nodejs.org/en/)
-PostgresSQL (https://www.postgresql.org/download/) - choose your system and follow those instructions. 
   - Postico was personally used. (https://eggerapps.at/postico/) - A modern PostgreSQL client for mac systems. 

### Installing - Get the Development Environment Running 
1. Clone or download the project
2. Type "npm install" into your terminal
3. Type "npm run server" into your terminal
4. In a different terminal window, type "npm run client" into your terminal

### File configurations 
1. Create a .env file outside of your folders 
2. Visit https://passwordsgenerator.net/    to generate a password. 
3. The .env file should have a line that is SERVER_SESSION_SECRET=*paste in the password generated here*

### Create database 
1. Download and open Postico
2. Create new database named "immigrant_families"
3. Copy SQL text from database.sql
4. Paste SQL text into Postico and execute statements to create tables and intial user

### What URL to demo the app 
1. If npm run client did not open a new browser/tab for you, 
in your browser URL, insert http://localhost:3000/#/home to navigate to the home page of this application and begin demo-ing. 

### Login
1. This is a protected application where users need to be registered by an admin
2. To log in as the initial admin, use the following credentials: 
- username: Test User
- password: testuser

### Application screenshots 
![Admin Landing Page](./images/admin_landing.jpg "Administrative Landing Page")
![Volunteer Landing Page](./images/volunteer_landing.jpg "Volunteer Landing Page")
![Volunteer Bio Page](./images/volunteer_bio.jpg "Volunteer Bio Page")
![Volunteer Events Page](./images/volunteer_events.jpg "Volunteer Events Page")

## Completed Features Listed Below
* seperate features enabled for admins and volunteers 

### ADMINS can:
- create a case 
- edit a case 
- close a case
- search for a case by name or case ID
- view a case and it's information 
- assign volunteer(s) to case(s)
- create volunteers or admins 
- view volunteers 
- search volunteers 
- view volunteer information 

### VOLUNTEERS can: 
- view cases they have been assigned to 
- create notes in a case for admin and other volunteers to see
ex) change of address, new doctor(s), new school etc. 
- create events within a case for admin and other volunteers to see
ex) doctors appointments, court dates, etc. 

### Heroku Deployment

1. Sign up for an account on [Heroku.com](https://www.heroku.com/)
- You may have to give them a credit card, but you shouldnt need to pay for anything
2. Install Heroku CLI by typing `brew install heroku/brew/heroku` in Terminal
3. Authenticate by typing `heroku login` in Terminal

### Heroku Setup

Run the following commands from within your project folder.

1. In terminal, navigate to your project folder and type `heroku create`
2. Login in if prompted -- it might ask to open a browser
3. Type `git remote -v` to ensure it added successfully

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku master
```

   > Note: You'll need to commit and push each time you make a change that you want to deploy to Heroku.

   > Note: It is best to fully test your code locally before deploying to Heroku. Bugs are much harder to troubleshoot on a live website.

### Postgresql on Heroku

1. In terminal, type `heroku addons:create heroku-postgresql:hobby-dev` to set up Postgresql on your Heroku project
2. Next, type `heroku pg:push immigrant_families DATABASE_URL` to copy your database contents up to Heroku. 

Next, commit your changes and push them to Heroku:

```
git add .
git commit -m "MESSAGE"
git push heroku master
```

Lastly, open terminal and type `heroku open` as a shortcut to open your website in a browser.


# Next steps 
- create a feature to gather statistical data. 
ex) how many families are on the grocery program etc. 
- create ability to reset passwords

# Developers 
- Juno Vue 
- Kingman Douglass 
- Ben Ragsdale 
- Joe Schlachtenhaufen