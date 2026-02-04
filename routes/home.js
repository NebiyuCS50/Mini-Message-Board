const { Router } = require("express");
const router = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});
router.get("/message/:id", (req, res) => {
  const { id } = req.params;
  const message = messages[id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("detalis", { message });
});

module.exports = { messages, router };
