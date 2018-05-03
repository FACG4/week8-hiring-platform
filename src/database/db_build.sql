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
  password VARCHAR(80) NOT NULL,
  skill_id INTEGER REFERENCES skills(id),
  carrer VARCHAR(30) NOT NULL
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


INSERT INTO employees(username, fname, lname, email, password, skill_id, carrer) VALUES
('Sallam1994' , 'sallam' , 'Tanna', 'sallamtanna2015@hotmail.com' , '$2b$08$iwaJjyEnXTgOKK4G3zPT/eAVsAcGjfcmOKQZ0NoKwTladkj3LtrNe', 1, 'Engineer'),
('Haneen Shahwan' , 'Haneen' , 'Shahwan', 'Haneen2015@hotmail.com' , '$2b$08$iwaJjyEnXTgOKK4G3zPT/eAVsAcGjfcmOKQZ0NoKwTladkj3LtrNe', 2, 'Engineer');




  COMMIT;
