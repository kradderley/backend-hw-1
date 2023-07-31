const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

router.get("/tvshows", async (req, res) => {
  const results =
    await asyncMySQL(`SELECT name, adult, original_language, overview
                          FROM tv_show`);

  res.send({ results });
});

router.get("/tvshow/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id) || tv_id < 1) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const results =
    await asyncMySQL(`SELECT name, adult, original_language, overview
                                      FROM tv_show 
                                          WHERE id LIKE ${tv_id};`);

  if (results.length > 0) {
    res.send({ results });
    return;
  }
  res.send({ status: 0, reason: "Entry not found" });

  // const _series = [...req.series];

  // const tvshow = _series.find((char) => {
  //   return char.tv_id === tv_id;
  // });

  // if (!tvshow) {
  //   res.send({ status: 0, reason: "Tv show does not exist" });
  // }

  // res.send({ status: 1, tvshow });
});

module.exports = router;
