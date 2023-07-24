const express = require("express");
const router = express.Router();

router.post("/tvshow", (req, res) => {
  const { adult, name, original_language, overview, media_type } = req.body;

  if (
    !adult ||
    !name ||
    !original_language ||
    !overview ||
    !media_type ||
    typeof adult !== "string" ||
    typeof name !== "string" ||
    typeof original_language !== "string" ||
    typeof overview !== "string" ||
    typeof media_type !== "string"
  ) {
    res.send({ status: 0, reason: "Not enough/incorrect information added" });
    return;
  }

  const indexOf = req.series.findIndex((item) => {
    item.name === name;
  });

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Tv show already added" });
    return;
  }

  //   how to add tv_id based on previous object ???
  req.series.push({
    adult,
    id: Math.round(Math.random() * 100000),
    name,
    original_language,
    overview,
    media_type,
  });

  res.send({ status: 1, reason: "New movie added" });
});

module.exports = router;
