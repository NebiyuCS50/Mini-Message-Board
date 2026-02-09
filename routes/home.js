const { Router } = require("express");
const router = Router();
const controller = require("../controllers/messageController");

router.get("/", controller.userList);
router.post("/new", controller.addMessage);
router.get("/new", controller.newMessageForm);
router.get("/message/:id", controller.messageDetails);

module.exports = { router };
