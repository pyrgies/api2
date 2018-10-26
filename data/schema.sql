DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id        INTEGER PRIMARY KEY NOT NULL,
    name      VARCHAR(200)        NOT NULL,
    password  VARCHAR(200)        NOT NULL,
    UNIQUE (name)
);