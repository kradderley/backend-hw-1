const express = require("express");
const router = express.Router();

router.get("/tvshows", (req, res) => {
  res.send(req.series);
});

router.get("/tvshow/:tv_id", (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id) || tv_id < 1) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const _series = [...req.series];

  const tvshow = _series.find((char) => {
    return char.tv_id === tv_id;
  });

  if (!tvshow) {
    res.send({ status: 0, reason: "Tv show does not exist" });
  }

  res.send({ status: 1, tvshow });
});

module.exports = router;
