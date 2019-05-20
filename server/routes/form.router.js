const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/medical', (req, res) => {
    let medical = req.body;
    console.log('Adding in tattoo:', medical);
    let sqlText = `INSERT INTO medical (doctor_name, doctor_phone, medical_conditions, counselor, counselor_phone, pediatrician, pediatrician_phone, optometrist, optometrist_phone, dentist, dentist_phone, vaccinations, insurance_card_info, fee_coverage, medical_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;
    pool.query(sqlText, [medical.doctor_name, medical.doctor_phone, medical.medical_conditions, medical.counselor, medical.counselor_phone, medical.pediatrician, medical.pediatrician_phone, medical.optometrist, medical.optometrist_phone, medical.dentist, medical.dentist_phone, medical.vaccinations, medical.insurance_card_info, medical.fee_coverage, medical.medical_notes])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST medical form');
        res.sendStatus(500);
      })
  })

  router.post('/legal', (req, res) => {
    let legal = req.body;
    console.log('Adding in legal form:', legal);
    let sqlText = `INSERT INTO legal_status 
    (last_court_date, last_court_date_outcome, next_court_date, next_court_date_outcome, asylum_application, work_authorization )
    VALUES 
    ($1, $2, $3, $4, $5, $6)`;
    pool.query(sqlText, [legal.last_court_date, legal.last_court_date_outcome, legal.next_court_date, 
      legal.next_court_date_outcome, legal. asylum_application, legal.work_authorization])
      .then( (response) => {
        console.log(`got it`, response);
        
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST legal form', error);
        res.sendStatus(500);
      })
  })

module.exports = router;