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
  skill_id INTEGER REFERENCES skills(id),
  career VARCHAR(30) NOT NULL,
  mobile VARCHAR(30) Not Null
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


INSERT INTO employees( fname, Lname, email, password, skill_id, career,mobile) VALUES
( 'sallam' , 'Tanna', 'sallamtanna2015@hotmail.com' , '$2b$08$iwaJjyEnXTgOKK4G3zPT/eAVsAcGjfcmOKQZ0NoKwTladkj3LtrNe', 1, 'Engineer','123'),
('Haneen' , 'Shahwan', 'Haneen2015@hotmail.com' , '$2b$08$iwaJjyEnXTgOKK4G3zPT/eAVsAcGjfcmOKQZ0NoKwTladkj3LtrNe', 2, 'Engineer','1223');




  COMMIT;
