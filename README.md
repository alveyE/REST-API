# Rest API

## Ethan Alvey

Here is the REST API complete with basic CRUD functionality with both notes and users including authentication.

I used a MySQL database which can be set up with the following SQL commands:

---

CREATE DATABASE notes;

CREATE TABLE notes.users (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

CREATE TABLE notes.notes (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL
);

---

I also have a .env file that requires the following variables:

- APP_PORT
- DB_PORT
- DB_HOST=
- DB_USER
- DB_PASS
- MYSQL_DB
- LOGIN_KEY

Please let me know if there are any questions. Thank you!
