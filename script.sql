-- @block
Show timezone;


-- @block
DROP TABLE messages;

-- @block
CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message_text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- @block
INSERT INTO messages (message_text, username)
VALUES('Hello, World!', 'John Doe');


-- @block
INSERT INTO messages (message_text, username, added)
VALUES('Hello, World!', 'John Doe', '2021-04-22T15:32:11.321Z');



-- @block
INSERT INTO messages (message_text, username)
VALUES('I am from India', 'Anurag Kumar');


-- @block
SELECT * from messages;