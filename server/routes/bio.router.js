const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//Adds info from bio form at bio-form, returns OK status if it sucessfully posts

router.post('/', rejectUnauthenticated, (req, res) => {
    let bio = req.body;
    console.log('Adding in primary individual:', bio);
    let sqlText = `INSERT INTO primary_individual (last_name, first_name, dob, spouse_first_name, spouse_dob, phone, email, address, utilities, referred_by, reference_date, passport, us_id, encrypted) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;
    pool.query(sqlText, [bio.last_name, bio.first_name, bio.dob, bio.spouse_first_name, bio.spouse_dob, bio.phone, bio.email, bio.address, bio.utilities, bio.referred_by, bio.reference_date, bio.passport, bio.us_id, bio.encrypted])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST bio form, heres the error:', error);
        res.sendStatus(500);
      })
  })

module.exports = router;