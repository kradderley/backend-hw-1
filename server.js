const express = require("express");
const app = express();
const tvshow = require("./tvshow.json");

app.use(express.static("public"));

// route
app.get("/", (req, res) => {
  tvshow.forEach((char, index) => {
    char.id = index + 1;
  });
  res.send(tvshow);
});

// const port = process.env.PORT || 6001;
app.listen(6001, () => {
  console.log("The server is running!");
});
