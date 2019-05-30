const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const phone = req.body.phone;
  const email = req.body.email;
  const encrypted = req.body.encrypted;
  const address = req.body.address;
  const skills = req.body.skills;
  const second_language = req.body.second_language;
  const admin = req.body.admin;


  // register.email, register.encrpyted, register.address, register.skills, register.second_language
  // email, encrpyted, address, skills, second_language
  // $4, $5, $6, $7, $8
  const queryText = 'INSERT INTO "user" (username, password, phone, email, encrypted, address, skills, second_language, admin) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id';
  pool.query(queryText, [username, password, phone, email, encrypted, address, skills, second_language, admin])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.get('/register', (req, res) => {
  console.log('Getting all volunteers');
  pool.query(`SELECT * FROM "user"`)
  .then((results) => {
    for (let i=0; i<results.rows.length; i++) {
      const user = results && results.rows && results.rows[i];
  if (user) {
    delete user.password; 
  }
}
    res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting the volunteers', error);
  })
  })

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/register/:id', (req, res) => {
  console.log('Getting all volunteer bio info');
  console.log(`Getting volunteer bio info, req.params.id`, req.params.id);
  const sqlText = `SELECT * FROM "user" WHERE "id" = $1;`
  pool.query(sqlText, [req.params.id])
  .then((results) => {

    for (let i=0; i<results.rows.length; i++) {
      const user = results && results.rows && results.rows[i];
  if (user) {
    delete user.password; 
  }
}
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting the volunteer bio info', error);
      res.sendStatus(500);
  })
})

module.exports = router;
