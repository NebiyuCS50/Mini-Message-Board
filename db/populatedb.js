require("dotenv").config();

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    "user" VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages ("user", text, added) VALUES
    ('Amando', 'Hi there!', CURRENT_TIMESTAMP),
    ('Charles', 'Hello World!', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;`;

async function populateDB() {
  try {
    await client.connect();
    console.log("Connected to the database.");
    await client.query(SQL);
    console.log("Database populated successfully.");
    await client.end();
    console.log("Database connection closed.");
  } catch (err) {
    console.error("Error populating the database:", err);
  }
}
populateDB();
