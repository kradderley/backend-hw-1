const express = require("express");
const router = express.Router();

router.patch("/tvshow/:tv_id", (req, res) => {
  const tv_id = Number(req.params.tv_id);
  console.log(req.body, tv_id);

  if (Number.isNaN(tv_id)) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const indexOf = req.series.findIndex((item) => {
    return item.tv_id === tv_id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "Item does not exist" });
    return;
  }

  const { adult, name, original_language, original_name, overview } = req.body;

  if (adult && typeof adult === "boolean") {
    req.series[indexOf].adult = adult;
  }
  if (name) {
    req.series[indexOf].name = name;
  }
  if (overview && typeof overview === "string") {
    req.series[indexOf].overview = overview;
  }
  if (original_name === name) {
    req.series[indexOf].original_name = original_name;
  }
  if (
    original_language &&
    typeof original_language === "string" &&
    original_language.length === 2
  ) {
    req.series[indexOf].original_language = original_language;
  }

  res.send({ status: 1, reason: "Update Successful" });

  console.log(indexOf);
});

module.exports = router;
