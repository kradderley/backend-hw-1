const express = require("express");
const router = express.Router();

router.delete("/tvshow/:tv_id", (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id)) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const indexOf = req.series.findIndex((item) => {
    return item.tv_id === tv_id;
  });

  if (indexOf < 1) {
    res.send({ status: 0, reason: "Tv show not found" });
  }

  req.series.splice(indexOf, 1);
  res.send({ status: 1 });
});

module.exports = router;
