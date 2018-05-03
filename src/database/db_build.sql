  BEGIN;

  DROP TABLE IF EXISTS employees, employers, skills CASCADE;

  CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20)
  );


CREATE TABLE employees(
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  fname VARCHAR(30) NOT NULL,
  Lname VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(80) NOT NULL
  -- skill_id INTEGER REFERENCES skills(id)
  -- carrer VARCHAR(30) default ("22")
);

CREATE TABLE employers(
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  fname VARCHAR(30) NOT NULL,
  Lname VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(80) NOT NULL
);

INSERT INTO skills(title) VALUES ('Design'), ('Programming');


INSERT INTO employees(username, fname, lname, email, password) VALUES
('Sallam1994' , 'sallam' , 'Tanna', 'sallamtanna2015@hotmail.com' , '123456789'),
('Haneen Shahwan' , 'Haneen' , 'Shahwan', 'Haneen2015@hotmail.com' , '123456789');




  COMMIT;
