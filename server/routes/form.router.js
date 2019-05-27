const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/medical', (req, res) => {
    let medical = req.body;
    console.log('Adding in medical:', medical);
    let sqlText = `INSERT INTO medical (case_id, doctor_name, doctor_phone, medical_conditions, counselor, counselor_phone, pediatrician, pediatrician_phone, optometrist, optometrist_phone, dentist, dentist_phone, vaccinations, insurance_card_info, fee_coverage, medical_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
    pool.query(sqlText, [medical.case_id, medical.doctor_name, medical.doctor_phone, medical.medical_conditions, medical.counselor, medical.counselor_phone, medical.pediatrician, medical.pediatrician_phone, medical.optometrist, medical.optometrist_phone, medical.dentist, medical.dentist_phone, medical.vaccinations, medical.insurance_card_info, medical.fee_coverage, medical.medical_notes])
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
    (case_id, last_court_date, last_court_date_outcome, next_court_date, next_court_date_outcome, asylum_application, work_authorization )
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7)`;
    pool.query(sqlText, [legal.case_id, legal.last_court_date, legal.last_court_date_outcome, legal.next_court_date, 
      legal.next_court_date_outcome, legal. asylum_application, legal.work_authorization])
      .then( (response) => {
        console.log(`got it`, response);
        
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST legal form', error);
        res.sendStatus(500);
      })
    
  });

  router.get('/legal/:id', (req, res) => {
    console.log('Getting all legal status info');
    console.log('Getting LEGAL STATUS INFORMATION ID', req.params.id);
    const sqlText = `SELECT * FROM "legal_status" WHERE "case_id" = $1;`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the legal status form', error);
        res.sendStatus(500);
    })
  });

router.get('/medical/:id', (req, res) => {
    console.log('Getting all medical info');
    console.log('Getting current id FOR BIO MEDICAL INFO', req.params.id);
    const sqlText = `SELECT * FROM "medical" WHERE "case_id" = $1`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the medical forms', error);
        res.sendStatus(500);
    })
  });

  router.post('/bio', (req, res) => {
    let bio = req.body;
    console.log('Adding in primary individual:', bio);
    let sqlText = `INSERT INTO primary_individual (case_id, last_name, first_name, dob, spouse_first_name, spouse_dob, phone, email, address, referred_by, reference_date, passport, us_id, encrypted) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;
    pool.query(sqlText, [bio.case_id, bio.last_name, bio.first_name, bio.dob, bio.spouse_first_name, bio.spouse_dob, bio.phone, bio.email, bio.address, bio.referred_by, bio.reference_date, bio.passport, bio.us_id, bio.encrypted])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST bio form, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/bio/:id', (req, res) => {
    console.log('Getting all bio info');
    console.log('Getting current id FOR BIO FAMILY INFO', req.params.id);
    const sqlText = `SELECT * FROM "primary_individual" WHERE "case_id" = $1`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the bio forms', error);
        res.sendStatus(500);
    })
  })

  router.post('/children', async(req, res) => {

    const connection = await pool.connect()
    let children = req.body; 
    
    try {

      for(let i = 0; i< children.length; i++) {

        let id = children[i].case_id;
        let name = children[i].child_name;
        let dob = children[i].child_dob;
        let info = children[i].child_info;

      console.log(name, dob, info, id);
  
      await connection.query('BEGIN');
      const sqlText = `INSERT INTO primary_children
                      (child_name, child_dob, child_info, case_id)
                      VALUES ($1, $2, $3, $4);`;
      await connection.query( sqlText, [
       name, 
       dob,
       info,
       id
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
    })
    })

  router.post('/aid', (req, res) => {
    let aid = req.body;
    console.log('Adding in aid:', aid);
    let sqlText = `INSERT INTO aid (case_id, grocery_program, grocery_program_volunteer, go_fund_me, social_worker, social_worker_phone) VALUES 
    ($1, $2, $3, $4, $5, $6)`;
    pool.query(sqlText, [aid.case_id, aid.grocery_program, aid.grocery_program_volunteer, aid.go_fund_me, aid.social_worker, aid.social_worker_phone])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST aid form, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/aid/:id', (req, res) => {
    console.log('Getting all aid info');
    console.log('Getting AID INFORMATION ID', req.params.id);
    const sqlText = `SELECT * FROM "aid" WHERE "case_id" = $1`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        console.log(results.rows);
        
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the aid forms', error);
        res.sendStatus(500);
    })
  })

  router.put('/edit-aid/:id', (req, res) => {
    let aid = req.body;
    console.log('PUT in aid edit:', aid);
    let sqlText = `UPDATE "aid" SET "grocery_program" = $1, "grocery_program_volunteer" = $2, "go_fund_me" = $3, "social_worker" = $4, "social_worker_phone" = $5 WHERE "case_id" = $6`;
    pool.query(sqlText, [aid.grocery_program, aid.grocery_program_volunteer, aid.go_fund_me, aid.social_worker, aid.social_worker_phone, aid.case_id])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to PUT for aid form edits', error);
        res.sendStatus(500);
      })
  })


  router.post('/note', (req, res) => {
    let note = req.body;
    console.log('Adding in note:', note);
    let sqlText = `INSERT INTO notes (family_notes, date) VALUES 
    ($1, $2)`;
    pool.query(sqlText, [note.family_notes, note.date])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST note, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/note', (req, res) => {
    console.log('Getting all note info');
    pool.query(`SELECT * FROM "notes"`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the notes', error);

        res.sendStatus(500);
    })
  })


  router.post('/event', (req, res) => {
    let event = req.body;
    console.log('Adding in event:', event);
    let sqlText = `INSERT INTO events (date, description, case_id) VALUES 
    ($1, $2, $3)`;
    pool.query(sqlText, [event.date, event.description, event.case_id])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST event, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/event/:id', (req, res) => {
    console.log('Getting all event info');
    const sqlText = `SELECT * FROM "events" WHERE "case_id" = $1;`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the events', error);
        res.sendStatus(500);
    })
  })


  router.post('/bond', (req, res) => {
    let bond = req.body;
    console.log('Adding in bond and legal info:', bond);
    let sqlText = `INSERT INTO legal (case_id, ice_facility, bond_amount, bond_paid_date, bond_paid_by, foster_facility, foster_facility_address, attorney, attorney_phone, attorney_fee, legal_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
    pool.query(sqlText, [bond.case_id, bond.ice_facility, bond.bond_amount, bond.bond_paid_date, bond.bond_paid_by, bond.foster_facility, bond.foster_facility_address, bond.attorney, bond.attorney_phone, bond.attorney_fee, bond.legal_notes])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Failed to POST bond and legal info, heres the error:', error);
        res.sendStatus(500);
      })
  })

  router.get('/bond/:id', (req, res) => {
    console.log('Getting all bond and legal info');
    console.log('Getting LEGAL INFORMATION ID', req.params.id);
    const sqlText = `SELECT * FROM "legal" WHERE "case_id" = $1;`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the bond and legal info', error);
        res.sendStatus(500);
    })
  })

  // router.get('/bond', (req, res) => {
  //   console.log('Getting all bond and legal info');
  //   console.log('Getting ONE current id');
  //   const sqlText = `SELECT * FROM "legal"`
  //   pool.query(sqlText)
  //   .then((results) => {
  //       res.send(results.rows)
  //   }).catch((error) => {
  //       console.log('Something went wrong getting the bond and legal info', error);
  //       res.sendStatus(500);
  //   })
  // })

router.post('/school', (req, res) => {
  let school = req.body;
  console.log('Adding in school:', school);
  let sqlText = `INSERT INTO school (name, phone, email, case_id) VALUES 
  ($1, $2, $3, $4)`;
  pool.query(sqlText, [school.name, school.phone, school.email, school.case_id])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to POST school form');
      res.sendStatus(500);
    })
})

router.get('/school/:id', (req, res) => {
    console.log('Getting all school info');
    console.log('Getting current id for school info', req.params.id);
    const sqlText = `SELECT * FROM "school" WHERE "case_id" = $1`
    pool.query(sqlText, [req.params.id])
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
  let sqlText = `INSERT INTO housing (address, rent, paid_by, utilities, living_with_fam, case_id) VALUES 
  ($1, $2, $3, $4, $5, $6)`;
  pool.query(sqlText, [housing.address, housing.rent, housing.paid_by, housing.utilities, housing.living_with_fam, housing.case_id])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to POST housing form');
      res.sendStatus(500);
    })
})

router.get('/housing/:id', (req, res) => {
    console.log('Getting all housing info');
    console.log('Getting HOUSING INFORMATION ID', req.params.id);
    const sqlText = `SELECT * FROM "housing" WHERE "case_id" = $1`
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        console.log('Something went wrong getting the information from the housing forms', error);
        res.sendStatus(500);
    })
})

// router.get('/bio-identification/:id', (req, res) => {
//   console.log('Getting all ID info');
//   console.log('Getting current id for ID info', req.params.id);
//   const sqlText = `SELECT * FROM "identification" WHERE "case_id" = $1`
//   pool.query(sqlText, [req.params.id])
//   .then((results) => {
//       res.send(results.rows)
//   }).catch((error) => {
//       console.log('Something went wrong getting the information from the school forms', error);
//       res.sendStatus(500);
//   })
// })

router.post('/case', (req, res) => {
  let cases = req.body;
  console.log('Adding a new case:', cases);
  let sqlText = `INSERT INTO cases (case_last_name, case_number, status) VALUES 
  ($1, $2, $3) RETURNING id`;
  pool.query(sqlText, [cases.case_last_name, cases.case_number, cases.status])
    .then( (response) => {
      // res.sendStatus(201);
      res.send(response)
    })
    .catch( (error) => {
      console.log('Failed to POST new case');
      res.sendStatus(500);
    })
})

router.get('/all-cases', (req, res) => {
  console.log(`Getting all cases`);

  pool.query(`SELECT * FROM cases`)
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
  })

})

router.get('/all-cases/search/', (req, res) => {
  console.log(`this is query in all cases search`, req.query);
  let queryText = `SELECT * FROM cases WHERE (case_last_name ILIKE $1 OR case_number ILIKE $1);`;
    pool.query(queryText, ['%'+req.query.q+'%'])
    .then(results=>{
      console.log(`this is result from search query,`, results.rows)
      res.send(results.rows)
    })
    .catch(error => {
      res.sendStatus(500);
      console.log(`this was error when trying to search all caes:`, error);
      
    })
})

/*  */
router.get('/all-cases/:id', (req, res) => {
  console.log(`234p98234 REQ PARAMS ID `, req.params.id);
  console.log(`Getting all cases`);
  const sqlText = `SELECT * FROM cases WHERE id = $1 `;
  pool.query(sqlText, [req.params.id])
  .then((results) => {
      res.send(results.rows)
  }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
  })
})


router.get('/all-cases/search/:query', (req,res) => {

  console.log('in get case search');
  console.log(req.query);
})

router.get('/volunteer', (req, res) => {
  console.log(`HIT SERACH BY VOLUNTEER`);
  
  // console.log(req.params);

  // const id = req.params.id; 
  // const keyword = req.params.keyword; 
  
  // const queryText =   `SELECT * FROM "entries"
  //                     JOIN "images" ON "images"."entries_id" = "entries"."id"
  //                     WHERE "user_id" = ${id}
  //                     AND (
  //                     "description" LIKE '%${keyword}%' OR "description" ILIKE '%${keyword}%' OR
  //                     "title" LIKE '%${keyword}%' OR "title" ILIKE '%${keyword}%' OR
  //                     "location" LIKE '%${keyword}%' OR "location" ILIKE '%${keyword}%' OR
  //                     "url" LIKE '%${keyword}%' OR "url" ILIKE '%${keyword}%')`;

  // pool.query(queryText)
  //   .then ((result) => { res.send(result.rows);
  //     console.log(result.rows);
      

  //   })
  //   .catch((err) => {
  //     console.log(`Error getting entries containing KEYWORD`, err);
  //     res.sendStatus(500); 
      
  //   });
})

module.exports = router;