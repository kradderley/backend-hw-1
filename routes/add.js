const express = require("express");
const router = express.Router();

router.post("/tvshow", (req, res) => {
  const { adult, name, original_language, overview, media_type } = req.body;

  // const tv_id = Number(req.params.tv_id) + 1;

  if (
    !adult ||
    !name ||
    !original_language ||
    !overview ||
    (!media_type &&
      (typeof adult !== "boolean" ||
        typeof name !== "string" ||
        typeof original_language !== "string" ||
        typeof overview !== "string" ||
        typeof media_type !== "string"))
  ) {
    res.send({ status: 0, reason: "Not enough/incorrect information added" });
    return;
  }

  const indexOf = req.series.findIndex((item) => {
    return item.name === name || item.overview === overview;
  });

  if (indexOf >= 0) {
    res.send({ status: 0, reason: "Tv show already added" });
    return;
  }

  //   how to add tv_id based on previous object ???
  req.series.push({
    adult,
    name,
    original_language,
    overview,
    media_type,
    // tv_id: tv_id
  });

  res.send({ status: 1, reason: "New movie added" });
});

module.exports = router;
