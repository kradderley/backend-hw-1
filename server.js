const express = require("express");
const app = express();
const series = require("./tvshow.json");

// series.forEach((char, index) => {
//   char.tv_id = index + 1;
// });

app.use((req, res, next) => {
  req.series = series;
  next();
});

app.use(express.static("public"));

app.use(express.json());

app.use("/get", require("./routes/get"));
// app.use("/delete", require("./routes/delete"));
// app.use("/add", require("./routes/add"));
// app.use("/update", require("./routes/update"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log("The server is running!");
});
