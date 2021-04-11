const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8000;
const static_path = path.join(__dirname, "../public/html");
app.use(express.static(static_path));

app.get("/", (req, res) => {
  res.send("Hello from node");
});

app.listen(port, () => {
  console.log("Listning on port " + port);
});
