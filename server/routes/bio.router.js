const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let aid = req.body;
    console.log('Adding in aid:', aid);
    let sqlText = `INSERT INTO bio (grocery_program, grocery_program_volunteer, go_fund_me, social_worker, social_worker_phone) VALUES 
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