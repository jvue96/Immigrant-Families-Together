const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/medical', (req, res) => {
    let medical = req.body;
    console.log('Adding in medical:', medical);
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

router.get('/medical', (req, res) => {
    console.log('Getting all medical info');
    pool.query(`SELECT * FROM "medical"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the medical forms', error);
        res.sendStatus(500);
    })
  })

router.post('/school', (req, res) => {
  let school = req.body;
  console.log('Adding in school:', school);
  let sqlText = `INSERT INTO school (name, phone, email) VALUES 
  ($1, $2, $3)`;
  pool.query(sqlText, [school.name, school.phone, school.email])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to POST medical form');
      res.sendStatus(500);
    })
})

router.get('/school', (req, res) => {
    console.log('Getting all school info');
    pool.query(`SELECT * FROM "school"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the school forms', error);
        res.sendStatus(500);
    })
})

router.post('/housing', (req, res) => {
  let housing = req.body;
  console.log('Adding in housing:', housing);
  let sqlText = `INSERT INTO housing (address, rent, paid_by, utilities, living_with_fam) VALUES 
  ($1, $2, $3, $4, $5)`;
  pool.query(sqlText, [housing.address, housing.rent, housing.paid_by, housing.utilities, housing.living_with_fam])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to POST housing form');
      res.sendStatus(500);
    })
})

router.get('/housing', (req, res) => {
    console.log('Getting all housing info');
    pool.query(`SELECT * FROM "housing"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the housing forms', error);
        res.sendStatus(500);
    })
})

module.exports = router;