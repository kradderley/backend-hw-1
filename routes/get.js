const express = require("express");
const router = express.Router();

router.get("/tvshows", (req, res) => {
  res.send(req.tvshow);
});

router.get("/series/:id", (req, res) => {
  const _tvshow = [...req.tvshow];

  const series = _tvshow.find((char) => {
    return char.id === Number(req.params.id);
  });

  res.send(series);
});

module.exports = router;
