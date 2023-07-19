const express = require("express");
const app = express();
const tvshow = require("./tvshow.json");

app.use((req, res, next) => {
  req.tvshow = tvshow;
  next();
});

app.use(express.static("public"));

app.use(express.json());

app.use("/get", require("./routes/get"));

// route
app.get("/", (req, res) => {
  tvshow.forEach((char, index) => {
    char.id = index + 1;
  });
  res.send(tvshow);
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("The server is running!");
});
