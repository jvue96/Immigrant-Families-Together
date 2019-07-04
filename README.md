# Immigrant Families Together
Immigrant Families Together (IFT) is a volunteer-based organization in America that reunites separated families. The staff is composed entirely of volunteers, many of whom are balancing full-time jobs and families. They currently assist nearly seventy five families in areas ranging from posting bond, finding legal help, and supplying financial assistance.

# Live Demo Website
You can demo the application here: https://lovely-big-bend-66459.herokuapp.com/#/home <br/> 
Username: Test User <br/>
Password: testuser <br/>
*Allow 30 seconds for the website to load. This delay is a heroku feature that can't be changed.*

# Built With 
React, Redux, HTML, CSS, Passport, Axios, Node, Express, Postgres, and more (see package.json for full list of dependencies)

# Getting Started 
Follow instructions below to spin up a copy of this repo on your local machine

# Prerequisites
Software that is required prior to starting the application
   - NPM (https://www.npmjs.com/get-npm)
   - Node.js (https://nodejs.org/en/)
   - PostgresSQL (https://www.postgresql.org/download/) - choose your system and follow those instructions. 
      - Postico was personally used. (https://eggerapps.at/postico/) - A modern PostgreSQL client for mac systems. 

### Installing - Get the Development Environment Running 
1. Clone or download the project
2. Open the terminal in the code folder and type "npm install" 
3. Type "npm run server" to start up your server
4. In a different terminal window/tab, type "npm run client" into your terminal to start up your client

### File configurations 
1. Create a .env file outside of your folders 
2. Visit https://passwordsgenerator.net/    to generate a password. 
3. The .env file should have a line that is SERVER_SESSION_SECRET=*paste in the password generated here*

### Create database 
1. Open the application you're using for your PostgreSQL database
2. Create new database named "immigrant_families"
3. Copy SQL text from database.sql
4. Paste SQL text into Postico and execute statements to create tables and intial user

### The URL to use the app in local development
1. If npm run client did not open a new browser/tab for you, 
in your browser URL, insert <br/> http://localhost:3000/#/home <br/> to navigate to the home page of this application and begin demo-ing. 

### Login
1. This is a protected application where users need to be registered by an admin
2. To log in as the initial admin, use the following credentials: 
- Username: Test User
- Password: testuser

### Application screenshots 
![Admin Landing Page](./images/admin_landing.jpg "Administrative Landing Page")
![Volunteer Landing Page](./images/volunteer_landing.jpg "Volunteer Landing Page")
![Volunteer Bio Page](./images/volunteer_bio.jpg "Volunteer Bio Page")
![Volunteer Events Page](./images/volunteer_events.jpg "Volunteer Events Page")

## Completed Features Listed Below
* Seperate features enabled for admins and volunteers 

### ADMINS can:
- Create a case 
- Edit a case 
- Close a case
- Search for a case by name or case ID
- View a case and it's information 
- Assign volunteer(s) to case(s)
- Create volunteers or admins 
- View volunteers 
- Search volunteers 
- View volunteer information 

### VOLUNTEERS can: 
- View cases they have been assigned to 
- Create notes in a case for admin and other volunteers to see
Ex) change of address, new doctor(s), new school etc. 
- Create events within a case for admin and other volunteers to see
Ex) doctors appointments, court dates, etc. 


# Next steps 
- Create a feature to gather statistical data. 
ex) How many families are on the grocery program etc. 
- Create ability to reset passwords

# Developers 
- Juno Vue 
- Kingman Douglass 
- Ben Ragsdale 
- Joe Schlachtenhaufen