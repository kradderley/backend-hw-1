const express = require("express");
const router = express.Router();

router.get("/tvshows", (req, res) => {
  res.send(req.series);
});

router.get("/tvshow/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id) || id < 1) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const _series = [...req.series];

  const tvshow = _series.find((char) => {
    return char.id === id;
  });

  if (!tvshow) {
    res.send({ status: 0, reason: "Tv show does not exist" });
  }

  res.send({ status: 1, tvshow });
});

module.exports = router;
