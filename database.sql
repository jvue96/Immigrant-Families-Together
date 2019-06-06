
-- create a database table titled immigrant_families
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
   "id" SERIAL PRIMARY KEY,
   "username" VARCHAR (80) UNIQUE NOT NULL,
   "password" VARCHAR (1000) NOT NULL,
   "phone" VARCHAR (80),
   "email" VARCHAR (100),
   "encrypted" VARCHAR(100),
   "address" VARCHAR (200),
   "skills" VARCHAR (500),
   "second_language" VARCHAR (100),
   "admin" VARCHAR (80),
   "first_name" VARCHAR (100),
   "last_name" VARCHAR (100)
);

CREATE TABLE "cases" (
    "id" SERIAL PRIMARY KEY,
    "case_last_name" VARCHAR(200),
    "case_number" VARCHAR(100),
    "status" VARCHAR(100)
);

CREATE TABLE "users_cases" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "case_id" INT REFERENCES "cases"
);

CREATE TABLE "aid" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "grocery_program" BOOLEAN,
    "grocery_program_volunteer" VARCHAR(200),
    "go_fund_me" VARCHAR(200),
    "social_worker" VARCHAR(200),
    "social_worker_phone" VARCHAR(50)
);

CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "date" DATE,
    "description" VARCHAR(2000)
);

CREATE TABLE "housing" (
   "id" SERIAL PRIMARY KEY,
   "case_id" INT REFERENCES "cases",
   "address" VARCHAR (200),
   "rent" VARCHAR (100),
   "paid_by" VARCHAR (100),
   "utilities" VARCHAR (100),
   "living_with_fam" VARCHAR(100)
);

CREATE TABLE "legal" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "ice_facility" VARCHAR(200),
    "bond_amount" INT,
    "bond_paid_date" DATE,
    "bond_paid_by" VARCHAR(200),
    "foster_facility" VARCHAR(200),
    "foster_facility_address" VARCHAR(700),
    "attorney" VARCHAR(200),
    "attorney_phone" VARCHAR(200),
    "attorney_fee" VARCHAR(200),
    "legal_status_id" INT REFERENCES "legal_status",
    "legal_notes" VARCHAR(2000)
);

CREATE TABLE "legal_status" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "last_court_date" DATE,
    "last_court_date_outcome" VARCHAR(2000),
    "next_court_date" DATE,
    "next_court_date_outcome" VARCHAR(2000),
    "asylum_application" BOOLEAN,
    "work_authorization" BOOLEAN
);

CREATE TABLE "medical" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "doctor_name" VARCHAR(200),
    "doctor_phone" VARCHAR(100),
    "medical_conditions" VARCHAR(2000),
    "counselor" VARCHAR(2000),
    "counselor_phone" VARCHAR(100),
    "pediatrician" VARCHAR(2000),
    "pediatrician_phone" VARCHAR(100),
    "optometrist" VARCHAR(2000),
    "optometrist_phone" VARCHAR(100),
    "dentist" VARCHAR(2000),
    "dentist_phone" VARCHAR(100),
    "vaccinations" VARCHAR(2000),
    "insurance_card_info" VARCHAR(2000),
    "fee_coverage" BOOLEAN,
    "medical_notes" VARCHAR(2000)
);

CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "family_notes" VARCHAR(2000),
    "date" VARCHAR(50)
);

CREATE TABLE "primary_children" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "child_name" VARCHAR(200),
    "child_dob" VARCHAR(200),
    "child_info" VARCHAR(2000)
);

CREATE TABLE "primary_individual" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "last_name" VARCHAR (100),
    "first_name" VARCHAR (100),
    "dob" DATE,
    "spouse_first_name" VARCHAR(100),
    "spouse_dob" VARCHAR(50),
    "phone" VARCHAR (80),
    "email" VARCHAR (100),
    "address" VARCHAR (1000),
    "utlities" VARCHAR (100),
    "rent" INT,
    "rent_paid_by" VARCHAR(100),
    "housing_notes" VARCHAR(2000),
    "living_with_family" BOOLEAN,
	"referred_by" VARCHAR (500),
	"reference_date" DATE,
	"passport" BOOLEAN,
	"us_id" BOOLEAN,
	"encrypted" VARCHAR (200)
);

CREATE TABLE "school" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "name" VARCHAR (200),
    "phone" VARCHAR (20),
    "email" VARCHAR (100)
);


INSERT INTO "user" ("username", "first_name", "last_name", "password", "phone", "email", "encrypted", "address", "skills", "second_language", "admin" ) 
VALUES ('Test User', 'Initial', 'User', '$2b$10$JPYYlg9aWjGVVjcDFfrIVeRlK2ZLyVth56E7b/q2PPmlzDbWpWQ1m', '', '', '', '', '', '', 'yes');