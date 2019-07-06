const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//Major form post/get/update file with many routes

//Adds info from medical form at medical-form, returns OK status if it sucessfully posts
router.post('/medical', rejectUnauthenticated, (req, res) => {
  let medical = req.body;
  let sqlText = `INSERT INTO medical (case_id, doctor_name, doctor_phone, medical_conditions, counselor, counselor_phone, pediatrician, pediatrician_phone, optometrist, optometrist_phone, dentist, dentist_phone, vaccinations, insurance_card_info, fee_coverage, medical_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
  pool.query(sqlText, [medical.case_id, medical.doctor_name, medical.doctor_phone, medical.medical_conditions, medical.counselor, medical.counselor_phone, medical.pediatrician, medical.pediatrician_phone, medical.optometrist, medical.optometrist_phone, medical.dentist, medical.dentist_phone, medical.vaccinations, medical.insurance_card_info, medical.fee_coverage, medical.medical_notes])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST medical form');
      res.sendStatus(500);
    })
})

//Edits info from medical form at medical-edit where ID = :id, returns OK status if it sucessfully posts
router.put('/edit-medical/:id', rejectUnauthenticated, (req, res) => {
  let medical = req.body;
  console.log('PUT in aid edit:', medical);
  let sqlText = `UPDATE "medical" SET "doctor_name" = $2, "doctor_phone" = $3, "medical_conditions" = $4, "counselor" = $5, "counselor_phone" = $6, "pediatrician" = $7, "pediatrician_phone" = $8, "optometrist" = $9, "optometrist_phone" = $10, "dentist" = $11, "dentist_phone" = $12, "vaccinations" = $13, "insurance_card_info" = $14, "fee_coverage" = $15, "medical_notes" = $16 WHERE "case_id" = $1`;
  pool.query(sqlText, [medical.case_id, medical.doctor_name, medical.doctor_phone, medical.medical_conditions, medical.counselor, medical.counselor_phone, medical.pediatrician, medical.pediatrician_phone, medical.optometrist, medical.optometrist_phone, medical.dentist, medical.dentist_phone, medical.vaccinations, medical.insurance_card_info, medical.fee_coverage, medical.medical_notes])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for medical form edits', error);
      res.sendStatus(500);
    })
})

//Adds info from legal form at legal-form, returns OK status if it sucessfully posts
router.post('/legal', rejectUnauthenticated, (req, res) => {
  let legal = req.body;
  console.log('Adding in legal form:', legal);
  let sqlText = `INSERT INTO legal_status 
    (case_id, last_court_date, last_court_date_outcome, next_court_date, next_court_date_outcome, asylum_application, work_authorization )
    VALUES 
    ($1, $2, $3, $4, $5, $6, $7)`;
  pool.query(sqlText, [legal.case_id, legal.last_court_date, legal.last_court_date_outcome, legal.next_court_date,
  legal.next_court_date_outcome, legal.asylum_application, legal.work_authorization])
    .then((response) => {

      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST legal form', error);
      res.sendStatus(500);
    })

});
//Gets info from legal status table where ID = :id, sends data rows when OK
router.get('/legal/:id', rejectUnauthenticated, (req, res) => {
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

//Edits info from legal form at legal-edit where ID=:id, returns OK status if it sucessfully posts
router.put('/edit-legal/:id', rejectUnauthenticated, (req, res) => {
  let legal = req.body;
  let sqlText = `UPDATE "legal_status" SET "last_court_date" = $1, 
                  "last_court_date_outcome" = $2, 
                  "next_court_date" = $3, 
                  "next_court_date_outcome" = $4, 
                  "asylum_application" = $5, 
                  "work_authorization" = $6 
                  WHERE "case_id" = $7`;
  pool.query(sqlText, [legal.last_court_date,
  legal.last_court_date_outcome,
  legal.next_court_date,
  legal.next_court_date_outcome,
  legal.asylum_application,
  legal.work_authorization,
  legal.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for legal form edits', error);
      res.sendStatus(500);
    })
})


//gets info from medical table where ID = :id, sends data rows when successfull
router.get('/medical/:id', rejectUnauthenticated, (req, res) => {

  const sqlText = `SELECT * FROM "medical" WHERE "case_id" = $1`
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the medical forms', error);
      res.sendStatus(500);
    })
});


//post info to primary_individual table from create-case and bio-form
router.post('/bio', rejectUnauthenticated, (req, res) => {
  let bio = req.body;
  let sqlText = `INSERT INTO primary_individual (case_id, last_name, first_name, dob, spouse_first_name, spouse_dob, phone, email, address, referred_by, reference_date, passport, us_id, encrypted) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;
  pool.query(sqlText, [bio.case_id, bio.last_name, bio.first_name, bio.dob, bio.spouse_first_name, bio.spouse_dob, bio.phone, bio.email, bio.address, bio.referred_by, bio.reference_date, bio.passport, bio.us_id, bio.encrypted])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST bio form, heres the error:', error);
      res.sendStatus(500);
    })
})

//get info to primary_individual table where id= :id, return data rows when OK

router.get('/bio/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "primary_individual" WHERE "case_id" = $1`
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {

      console.log('Something went wrong getting the information from the bio forms', error);
      res.sendStatus(500);
    })
})


//edit info in primary_individual table where id=:id, return OK if successful
router.put('/edit-bio/:id', rejectUnauthenticated, (req, res) => {
  let bio = req.body;
  console.log('PUT in aid edit:', bio);
  let sqlText = `UPDATE "primary_individual" SET "last_name" = $2, "first_name" = $3, "dob" = $4, "spouse_first_name" = $5, "spouse_dob" = $6, "phone" = $7, "email" = $8, "address" = $9, "referred_by" = $10, "reference_date" = $11, "passport" = $12, "us_id" = $13, "encrypted" = $14 WHERE "case_id" = $1`;
  pool.query(sqlText, [bio.case_id, bio.last_name, bio.first_name, bio.dob, bio.spouse_first_name, bio.spouse_dob, bio.phone, bio.email, bio.address, bio.referred_by, bio.reference_date, bio.passport, bio.us_id, bio.encrypted])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for aid form edits', error);
      res.sendStatus(500);
    })
})


//post info in primary_children table from children-form, return OK if successful 
router.post('/children', rejectUnauthenticated, async (req, res) => {

  console.log(`@@@@ hit me POST CHILDREN`);
  

  const connection = await pool.connect()
  let children = req.body;
  console.log(children);
  

  //potentially multiple children to add, this funct loops through and adds each child
  try {
    //MOVING LOOP
    await connection.query('BEGIN');
    for (let i = 0; i < children.length; i++) {

      let id = children[i].case_id;
      let name = children[i].child_name;
      let dob = children[i].child_dob;
      let info = children[i].child_info;

      // await connection.query('BEGIN');
      const sqlText = `INSERT INTO primary_children
                      (child_name, child_dob, child_info, case_id)
                      VALUES ($1, $2, $3, $4);`;
      await connection.query(sqlText, [
        name,
        dob,
        info,
        id
      ]);
    }
    //MOVING COMMIT AT END OF LOOP
    await connection.query('COMMIT');
  }



  catch (error) {
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

//get info to primary_children table where id= :id, return data rows when OK
router.get('/children/:id', (req, res) => {
  
  const sqlText = `SELECT * FROM primary_children WHERE case_id = $1 ORDER BY "child_dob" ASC;`
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the children forms', error);
    })
})

//Edit info in primary_children table where id= :id, return OK 
// router.put('/edit-children/:id', async (req, res) => {

//   const connection = await pool.connect()
//   let children = req.body;

//   try {
//     //MOVING LOOP
//     await connection.query('BEGIN');
//     for (let i = 0; i < children.length; i++) {

//       let id = children[i].case_id;
//       let name = children[i].child_name;
//       let dob = children[i].child_dob;
//       let info = children[i].child_info;

//       console.log(name, dob, info, id);

//       // await connection.query('BEGIN');
//       const sqlText = `UPDATE "primary_children" SET "child_name" = $1, "child_dob" = $2, "child_info" = $3 WHERE "case_id" = $4;`;
//       await connection.query(sqlText, [
//         name,
//         dob,
//         info,
//         id
//       ]);
//       // await connection.query('COMMIT');
//     }
//     //MOVING COMMIT AT END OF LOOP
//     await connection.query('COMMIT');
//   }
//   catch (error) {
//     await connection.query('ROLLBACK');
//     console.log(`Error posting chilren form`, error);
//     res.sendStatus(500);
//   } finally {
//     // Always runs - both after successful try & after catch
//     // Put the client connection back in the pool
//     // This is super important! 
//     res.sendStatus(200);
//     connection.release()
//   }
// });

router.put('/edit-children/:id', rejectUnauthenticated, (req, res) => {
  let children = req.body;
  console.log(`case_id`, req.params.id);
  console.log(`id`, children.id);
  console.log(`hello world`);  
  
  let sqlText = `UPDATE "primary_children" SET "child_name" = $1, "child_dob" = $2, "child_info" = $3 WHERE 
  ("id" = $4 AND "case_id" = $5);`;
  pool.query(sqlText, [children.child_name, children.child_dob, children.child_info, children.id, req.params.id ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for children form edits', error);
      res.sendStatus(500);
    })
})




//adding info to aid table, return OK
router.post('/aid', rejectUnauthenticated, (req, res) => {
  let aid = req.body;
  console.log('Adding in aid:', aid);
  let sqlText = `INSERT INTO aid (case_id, grocery_program, grocery_program_volunteer, go_fund_me, social_worker, social_worker_phone) VALUES 
    ($1, $2, $3, $4, $5, $6)`;
  pool.query(sqlText, [aid.case_id, aid.grocery_program, aid.grocery_program_volunteer, aid.go_fund_me, aid.social_worker, aid.social_worker_phone])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST aid form, heres the error:', error);
      res.sendStatus(500);
    })
})

//get aid table info where ID=:id, return data rows when OK
router.get('/aid/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "aid" WHERE "case_id" = $1`
  pool.query(sqlText, [req.params.id])
    .then((results) => {

      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the aid forms', error);
      res.sendStatus(500);
    })
})

//editing aid table where ID = :id, from aid-edit view, return OK when successful
router.put('/edit-aid/:id', rejectUnauthenticated, (req, res) => {
  let aid = req.body;
  let sqlText = `UPDATE "aid" SET "grocery_program" = $1, "grocery_program_volunteer" = $2, "go_fund_me" = $3, "social_worker" = $4, "social_worker_phone" = $5 WHERE "case_id" = $6`;
  pool.query(sqlText, [aid.grocery_program, aid.grocery_program_volunteer, aid.go_fund_me, aid.social_worker, aid.social_worker_phone, aid.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for aid form edits', error);
      res.sendStatus(500);
    })
})

//adds to table note, OK response when successful
router.post('/note', rejectUnauthenticated, (req, res) => {
  let note = req.body;
  let sqlText = `INSERT INTO notes (family_notes, date, case_id) VALUES 
    ($1, $2, $3)`;
  pool.query(sqlText, [note.family_notes, note.date, note.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST note, heres the error:', error);
      res.sendStatus(500);
    })
})


//gets to table note, OK response when successful
router.get('/note/:id', rejectUnauthenticated, (req, res) => {
  console.log('Getting all note info');
  const sqlText = `SELECT * FROM "notes" WHERE "case_id" = $1 ORDER BY date;`
  pool.query(sqlText, [req.params.id])

    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the notes', error);

      res.sendStatus(500);

    })
})

//posts to events table, ok when successful, from form at volunteer-events
router.post('/event', rejectUnauthenticated, (req, res) => {
  let event = req.body;
  let sqlText = `INSERT INTO events (date, description, case_id) VALUES 
    ($1, $2, $3)`;
  pool.query(sqlText, [event.date, event.description, event.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST event, heres the error:', error);
      res.sendStatus(500);
    })
})

//gets all events for a specific case (found by id), data rows sent when successful
router.get('/event/:id', rejectUnauthenticated, (req, res) => {
  console.log('Getting all event info');
  const sqlText = `SELECT * FROM "events" WHERE "case_id" = $1 ORDER BY date;`
  pool.query(sqlText, [req.params.id])

    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the events', error);
      res.sendStatus(500);
    })
})

//gets all events for the admin view /events
router.get('/events', rejectUnauthenticated, (req, res) => {
  let sqlText = `SELECT events.date, events.description, cases.case_last_name, cases.case_number FROM events
    JOIN cases ON cases.id = events.case_id
    GROUP BY cases.case_last_name, events.date, events.description, cases.case_number 
    ORDER BY events.date ASC
    `
  pool.query(sqlText)
    .then(results => {
      res.send(results.rows)
    })
    .catch(error => {
      res.sendStatus(500);
    })
});


//searches event data by passing query string and checking against multiple columns in table
router.get('/events/search/', rejectUnauthenticated, (req, res) => {
  console.log(`this is query in all events search`, req.query);
  let queryText = `SELECT events.date, events.description, cases.case_last_name, cases.case_number FROM events 
LEFT JOIN cases ON cases.id = events.case_id
WHERE (events.description ILIKE $1 OR cases.case_number ILIKE $1 OR  cases.case_last_name ILIKE $1)
GROUP BY cases.case_last_name, events.date, events.description, cases.case_number;`;
  pool.query(queryText, ['%' + req.query.q + '%'])
    .then(results => {
      console.log(`this is result from event search query,`, results.rows)
      res.send(results.rows)
    })
    .catch(error => {
      res.sendStatus(500);
      console.log(`this was error when trying to search events:`, error);

    })
})



//adds to legal table info from bond form
router.post('/bond', rejectUnauthenticated, (req, res) => {
  let bond = req.body;
  console.log('Adding in bond and legal info:', bond);
  let sqlText = `INSERT INTO legal (case_id, ice_facility, bond_amount, bond_paid_date, bond_paid_by, foster_facility, foster_facility_address, attorney, attorney_phone, attorney_fee, legal_notes) VALUES 
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
  pool.query(sqlText, [bond.case_id, bond.ice_facility, bond.bond_amount, bond.bond_paid_date, bond.bond_paid_by, bond.foster_facility, bond.foster_facility_address, bond.attorney, bond.attorney_phone, bond.attorney_fee, bond.legal_notes])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST bond and legal info, heres the error:', error);
      res.sendStatus(500);
    })
})

//get bond info for a specific case, send data rows when successful
router.get('/bond/:id', rejectUnauthenticated, (req, res) => {
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
//edit bond info for a specific case, send ok when successful

router.put('/edit-bond/:id', rejectUnauthenticated, (req, res) => {
  console.log('edit bond');
  let bond = req.body;
  let sqlText = `UPDATE "legal" SET "ice_facility" = $1, 
                    "bond_amount" = $2, 
                    "bond_paid_date" = $3, 
                    "bond_paid_by" = $4,
                    "foster_facility" = $5, 
                    "foster_facility_address" = $6, 
                    "attorney" = $7,
                    "attorney_phone" = $8,
                    "attorney_fee" = $9,
                    "legal_notes" = $10
                    WHERE "case_id" = $11`;
  pool.query(sqlText, [bond.ice_facility,
  bond.bond_amount,
  bond.bond_paid_date,
  bond.bond_paid_by,
  bond.foster_facility,
  bond.foster_facility_address,
  bond.attorney,
  bond.attorney_phone,
  bond.attorney_fee,
  bond.legal_notes,
  bond.case_id,
  ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for bond form edits', error);
      res.sendStatus(500);
    })
})

//post school info school table, loop for potentially multiple schools, ok sent if successful
router.post('/school', rejectUnauthenticated, async (req, res) => {

  const connection = await pool.connect()
  let school = req.body;

  try {
    //MOVING LOOP
    await connection.query('BEGIN');
    for (let i = 0; i < school.length; i++) {

      let case_id = school[i].case_id;
      let name = school[i].name;
      let phone = school[i].phone;
      let email = school[i].email;
      console.log(case_id, name, phone, email);

      // await connection.query('BEGIN');
      const sqlText = `INSERT INTO school (name, phone, email, case_id) VALUES ($1, $2, $3, $4)`;
      await connection.query(sqlText, [
        name,
        phone,
        email,
        case_id
      ]);
      // await connection.query('COMMIT');
    }
    //MOVING COMMIT AT END OF LOOP
    await connection.query('COMMIT');
  }
  catch (error) {
    await connection.query('ROLLBACK');
    console.log(`Error posting school form`, error);
    res.sendStatus(500);
  } finally {
    // Always runs - both after successful try & after catch
    // Put the client connection back in the pool
    // This is super important! 
    res.sendStatus(200);
    connection.release()
  }
});

//gets school info for the case that matches the id, returns data rows when successful
router.get('/school/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM "school" WHERE "case_id" = $1`
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the school forms', error);
      res.sendStatus(500);
    })
})

//edits school info in the school table for the case that matches the id, returns 201 when OK
router.put('/edit-school/:id', rejectUnauthenticated, (req, res) => {
  let school = req.body;
  let sqlText = `UPDATE "school" SET "name" = $1, "phone" = $2, "email" = $3 WHERE "id" = $4;`;
  pool.query(sqlText, [school.name, school.phone, school.email, school.id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for school form edits', error);
      res.sendStatus(500);
    })
})

//adds to housing table, from housing-form, 201 returned when successful
router.post('/housing', rejectUnauthenticated, (req, res) => {
  let housing = req.body;
  let sqlText = `INSERT INTO housing (address, rent, paid_by, utilities, living_with_fam, case_id) VALUES 
  ($1, $2, $3, $4, $5, $6)`;
  pool.query(sqlText, [housing.address, housing.rent, housing.paid_by, housing.utilities, housing.living_with_fam, housing.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to POST housing form');
      res.sendStatus(500);
    })
})

//gets housing info from housing table where case id = :id, returns data rows when successful
router.get('/housing/:id', rejectUnauthenticated, (req, res) => {

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

//edits housing info from housing table where case id = :id, returns 201 where OK
router.put('/edit-housing/:id', rejectUnauthenticated, (req, res) => {
  let housing = req.body;
  let sqlText = `UPDATE "housing" SET "address" = $1, "rent" = $2, "paid_by" = $3, "utilities" = $4, "living_with_fam" = $5 WHERE "case_id" = $6`;
  pool.query(sqlText, [housing.address, housing.rent, housing.paid_by, housing.utilities, housing.living_with_fam, housing.case_id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to PUT for housing form edits', error);
      res.sendStatus(500);
    })
})

//adds new case from create-case form; response is ID when successful
router.post('/case', rejectUnauthenticated, (req, res) => {
  let cases = req.body;
  let sqlText = `INSERT INTO cases (case_last_name, case_number, status) VALUES 
  ($1, $2, $3) RETURNING id`;
  pool.query(sqlText, [cases.case_last_name, cases.case_number, cases.status])
    .then((response) => {
      // res.sendStatus(201);
      res.send(response)
    })
    .catch((error) => {
      console.log('Failed to POST new case');
      res.sendStatus(500);
    })
})

//edits case status (open, closed) where id = :id, from status, 201 when successful
router.put('/case/:id', rejectUnauthenticated, (req, res) => {
  let cases = req.body;
  let sqlText = `UPDATE "cases" SET "status" = $1 WHERE "id" = $2`;
  pool.query(sqlText, [cases.status, cases.id])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Failed to CHANGE case status', error);
      res.sendStatus(500);
    })
})

//gets a list of all cases for admin view /case-list
router.get('/all-cases', rejectUnauthenticated, (req, res) => {
  pool.query(`SELECT * from "cases"`)
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
    })

})

//get all cases for a volunteer, for volunteer view, return data rows when OK 
router.get('/volunteer-cases/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT "users_cases"."case_id", "primary_individual"."last_name", "cases"."status" FROM users_cases
                    JOIN "primary_individual" ON "users_cases"."case_id" = "primary_individual"."case_id"
                    JOIN "cases" ON "users_cases"."case_id" = "cases"."id"
                    WHERE user_id = $1 AND "cases"."status" = $2 `;
  pool.query(sqlText, [req.params.id, 'ACTIVE'])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
    })  
})
//searches case data by passing query string and checking against multiple columns in table
router.get('/all-cases/search/', rejectUnauthenticated, (req, res) => {
  let queryText = `SELECT * FROM cases WHERE (case_last_name ILIKE $1 OR case_number ILIKE $1);`;
  pool.query(queryText, ['%' + req.query.q + '%'])
    .then(results => {
      console.log(`this is result from search query,`, results.rows)
      res.send(results.rows)
    })
    .catch(error => {
      res.sendStatus(500);
      console.log(`this was error when trying to search all caes:`, error);

    })
})

//get all cases for a specific id, where ID :id 
router.get('/all-cases/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT * FROM cases WHERE id = $1 `;
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
    })
})

//searches volunteer data by passing query string and checking against two columns in table
router.get('/volunteer/search/', rejectUnauthenticated, (req, res) => {
  console.log(`in volunteer get, here is req.query`, req.query);

  let queryText = `SELECT * FROM "user" WHERE (username ILIKE $1 OR email ILIKE $1 OR address ILIKE $1);`;
  pool.query(queryText, ['%' + req.query.q + '%'])
    .then(results => {
      for (let i = 0; i < results.rows.length; i++) {
        const user = results && results.rows && results.rows[i];
        if (user) {
          delete user.password;
        };
      };
      res.send(results.rows)
    })
    .catch(error => {
      res.sendStatus(500);
      console.log(`this was error when trying to search all volunteers:`, error);

    })

})

//assigns case to volunteer inserting into user_cases
router.post('/assign', rejectUnauthenticated, (req, res) => {
  let cases = req.body;
  let sqlText = `INSERT INTO users_cases (user_id, case_id) VALUES 
  ($1, $2)`;
  pool.query(sqlText, [cases.user_id, cases.case_id])
    .then((response) => {
      res.send(response)
    })
    .catch((error) => {
      console.log('Failed to POST the ASSIGN VOLUNTEER TO CASE', error);
      res.sendStatus(500);
    })
})

//WRITE A WHERE TO LIST ONLY THE TEAM MEMBERS ASSIGN TO THE CASE
router.get('/assign/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT "user"."username", "user"."phone", "user"."email", "user"."encrypted", "user"."address", "user"."skills", "user"."second_language" FROM users_cases
  JOIN "user" ON "users_cases"."user_id" = "user"."id"
  WHERE "users_cases"."case_id" = $1`;
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the team information', error);
      res.sendStatus(500);
    })
})

//get volunteer cases where case_id = :id, returns data rows when successful
router.get('/volunteer-caseload/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT "primary_individual"."first_name", "primary_individual"."last_name", "cases"."case_number" FROM users_cases
                  JOIN "primary_individual" ON "users_cases"."case_id" = "primary_individual"."case_id"
                  JOIN "cases" on "primary_individual"."case_id" = "cases"."id"
                  WHERE user_id = $1`;
  pool.query(sqlText, [req.params.id])
    .then((results) => {
      res.send(results.rows)
    }).catch((error) => {
      console.log('Something went wrong getting the information from the cases table', error);
      res.sendStatus(500);
    })
})

module.exports = router;