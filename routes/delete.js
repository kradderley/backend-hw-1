const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection")

router.delete("/tvshow/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id)) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const result = await asyncMySQL(`DELETE from tv_show
                                       WHERE id LIKE ${tv_id}; `)
  res.send({result}); 
  // const indexOf = req.series.findIndex((item) => {
  //   return item.tv_id === tv_id;
  // });

  // if (indexOf < 1) {
  //   res.send({ status: 0, reason: "Tv show not found" });
  // }

  // req.series.splice(indexOf, 1);
  // res.send({ status: 1 });
});

module.exports = router;
