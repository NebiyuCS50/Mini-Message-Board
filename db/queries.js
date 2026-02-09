const pool = require("./pool");

async function getAllMessages() {
  const res = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  console.log("Fetched messages:", res.rows);
  return res.rows;
}

async function getMessageById(id) {
  const res = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return res.rows[0];
}

async function addMessage(user, text) {
  const res = await pool.query(
    'INSERT INTO messages ("user", text) VALUES ($1, $2) RETURNING *',
    [user, text],
  );
  return res.rows[0];
}

module.exports = { getAllMessages, getMessageById, addMessage };
