const express = require("express");
const app = express();
const series = require("./tvshow.json");

series.forEach((char, index) => {
    char.id = index + 1;
  });

app.use((req, res, next) => {
  req.series = series;
  next();
});

app.use(express.static("public"));

app.use(express.json());

app.use("/get", require("./routes/get"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("The server is running!");
});
