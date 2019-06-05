const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//Adds info from bio form at bio-form, returns OK status if it sucessfully posts
router.post('/', rejectUnauthenticated, (req, res) => {
    let aid = req.body;
    let sqlText = `INSERT INTO aid (grocery_program, grocery_program_volunteer, go_fund_me, social_worker, social_worker_phone) VALUES 
    ($1, $2, $3, $4, $5)`;
    pool.query(sqlText, [aid.grocery_program, aid.grocery_program_volunteer, aid.go_fund_me, aid.social_worker, aid.social_worker_phone])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST aid form, heres the error:', error);
        res.sendStatus(500);
      })
  })

module.exports = router;