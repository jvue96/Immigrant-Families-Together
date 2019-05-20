
-- create a database table titled immigrant_families
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "last_name" VARCHAR (100),
    "first_name" VARCHAR (100),
    "second_language" VARCHAR (80),
    "special_attribute" VARCHAR (1000),
    "phone" VARCHAR (80),
    "email" VARCHAR (100),
    "address" VARCHAR (80),
    "admin" BOOLEAN,
    "encrypted" VARCHAR(100)
);

CREATE TABLE "cases" (
    "id" SERIAL PRIMARY KEY,
    "case_last_name" VARCHAR(200),
    "case_number" VARCHAR(100),
    "status" VARCHAR(100)
);


CREATE TABLE "users_cases" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users",
    "case_id" INT REFERENCES "cases"
);


CREATE TABLE "events" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE,
    "description" VARCHAR(2000)
);

CREATE TABLE "school" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (200),
    "phone" VARCHAR (20),
    "email" VARCHAR (100)
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
    "living_with_family" BOOLEAN
);


CREATE TABLE "primary_children" (
    "id" SERIAL PRIMARY KEY,
    "child_name" VARCHAR(200),
    "child_dob" VARCHAR(200),
    "child_info" VARCHAR(2000),
    "primary_individual_id" INT REFERENCES "primary_individual"
);

CREATE TABLE "identification" (
    "id" SERIAL PRIMARY KEY,
    "passport" BOOLEAN,
    "usa_id" BOOLEAN,
    "additional_info" VARCHAR(2000)
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

CREATE TABLE "notes" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "family_notes" VARCHAR(2000),
    "date" VARCHAR(50)
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

CREATE TABLE "bio" (
    "id" SERIAL PRIMARY KEY,
    "case_id" INT REFERENCES "cases",
    "primary_parent" INT REFERENCES "primary_individual",
    "case_referred" VARCHAR(2000),
    "case_referred_date" DATE,
    "identification_id" INT REFERENCES "identification",
    "medical_id" INT REFERENCES "medical",
    "encrypted" VARCHAR(100),
    "backstory" VARCHAR(2000),
    "school_id" INT REFERENCES "school"
);


CREATE TABLE "legal_status" (
    "id" SERIAL PRIMARY KEY,
    "last_court_date" DATE,
    "last_court_date_outcome" VARCHAR(2000),
    "next_court_date" DATE,
    "next_court_date_outcome" VARCHAR(2000),
    "asylum_application" BOOLEAN,
    "work_authorization" BOOLEAN
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
