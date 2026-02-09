require("dotenv").config();

const express = require("express");
const { router } = require("./routes/home");
const app = express();
const path = require("node:path");
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
