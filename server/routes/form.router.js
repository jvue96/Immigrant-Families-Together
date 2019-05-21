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

  router.post('/children', async(req, res) => {

    const connection = await pool.connect()
    let children = req.body; 
    
    try {

      for(let i = 0; i< children.length; i++) {

        let name = children[i].child_name;
        let dob = children[i].child_dob;
        let info = children[i].child_info;

      console.log(name, dob, info);
  
      await connection.query('BEGIN');
      const sqlText = `INSERT INTO primary_children
                      (child_name, child_dob, child_info)
                      VALUES ($1, $2, $3);`;
      await connection.query( sqlText, [
       name, 
       dob,
       info
      ]);       
      await connection.query('COMMIT');
    }}
    catch ( error ) {
      await connection.query('ROLLBACK');
      console.log(`Error posting chilren form`, error);
      res.sendStatus(500); 
    } finally {
      // Always runs - both after successful try & after catch
      // Put the client connection back in the pool
      // This is super important! 
      res.sendStatus(200); 
      connection.release()
    }
  });

  router.get('/children', (req, res) => {
    console.log('Getting all medical info');
    pool.query(`SELECT * FROM "primary_children"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the children forms', error);
        res.sendStatus(500);
    })
  })

module.exports = router;