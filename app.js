// app.js
const express = require("express");
const app = express();

app.get("/students", (req, res, next) => {
  res.json([{id: 1, name: "Axel"}, {id: 2, name: "Chris"}, {id: 3, name: "Michelle"}]);
})

app.listen(1234, () => {
  console.log("Listening on port 1234");
});
