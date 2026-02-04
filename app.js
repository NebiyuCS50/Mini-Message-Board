const express = require("express");
const { messages, router } = require("./routes/home");
const app = express();
const path = require("node:path");
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
