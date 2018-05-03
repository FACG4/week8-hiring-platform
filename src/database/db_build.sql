  BEGIN;

  DROP TABLE IF EXISTS employees, employers, skills CASCADE;

  CREATE TABLE skills(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20)
  );
CREATE TABLE employees(
  id SERIAL PRIMARY KEY,
   fname VARCHAR(30) NOT NULL,
  Lname VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(80) NOT NULL,
  skill_id INTEGER REFERENCES skills(id)
  -- carrer VARCHAR(30) NOT NULL,
  -- mobile VARCHAR(30) Not Null
);

CREATE TABLE employers(
  id SERIAL PRIMARY KEY,
  fname VARCHAR(30) NOT NULL,
  Lname VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(80) NOT NULL
);

INSERT INTO skills(title) VALUES ('Design'), ('Programming'),('Testing'),('Mentoring'),('Content writing'),
('Scrum master'),('Coordinator');


INSERT INTO employees( fname, lname, email, password, skill_id) VALUES
( 'sallam' , 'Tanna', 'sallamtanna2015@hotmail.com' , '123456789', 1),
( 'Haneen' , 'Shahwan', 'Haneen2015@hotmail.com' , '123456789', 2);




  COMMIT;
