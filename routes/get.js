const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

// router.get("/tvshows", (req, res) => {
//   res.send(req.series);
// });

router.get("/tvshow/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id) || tv_id < 1) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const results =
    await asyncMySQL(`SELECT name, overview, media_type, first_air_date
                                  FROM tv_show
                                    WHERE id LIKE ${tv_id};`);

  console.log(results);

  if (results.length > 0) {
    res.send({ status: 1 });
    return;
  }

  // if (!tvshow) {
  //   res.send({ status: 0, reason: "Tv show does not exist" });
  // }

  // res.send({ status: 1, tvshow });
});

module.exports = router;
