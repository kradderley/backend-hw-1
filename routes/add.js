const express = require("express");
const router = express.Router();

router.post("/tvshow", (req, res) => {
  const { adult, id, name, original_language, overview, media_type } = req.body;

  if (
    !adult ||
    !id ||
    !name ||
    !original_language ||
    !overview ||
    !media_type ||
    typeof adult !== "boolean" ||
    typeof id !== "number" ||
    typeof name !== "string" ||
    typeof original_language !== "string" ||
    typeof overview !== "string" ||
    media_type === "tv"
  ) {
    res.send({ status: 0, reason: "Not enough information added" });
    return;
  }

  const indexOf = req.series.findIndex((item) => {
    item.name === name;
  });

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Tv show already added" });
  }

  //   complete this section
  req.series.push({
    adult,
    id: Math.round(Math.random() * 1000),
    name,
    original_language,
    overview,
    media_type,
  });
});

module.exports = router;
