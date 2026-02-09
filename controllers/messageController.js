const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("user")
    .isAlpha()
    .withMessage(`User ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`User ${lengthErr}`),
  body("text")
    .isLength({ max: 300 })
    .withMessage("Message must be at most 300 characters long."),
];
exports.userList = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
};
exports.addMessage = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        title: "New Message",
        errors: errors.array(),
        data: matchedData(req),
      });
    }
    const { user, text } = matchedData(req);
    await db.addMessage(user, text);
    res.redirect("/");
  },
];
exports.newMessageForm = (req, res) => {
  res.render("form", { title: "New Message" });
};
exports.messageDetails = async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessageById(id);
  if (!message) {
    return res.status(404).send("Message not found");
  }
  res.render("details", { message });
};
