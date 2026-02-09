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

exports.userList = (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
};
exports.addMessage = (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
};
exports.newMessageForm = (req, res) => {
  res.render("form", { title: "New Message" });
};
exports.messageDetails = (req, res) => {
  const { id } = req.params;
  const message = messages[id];
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("details", { message });
};
