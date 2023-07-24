const express = require("express");
const router = express.Router();

router.patch("/tvshow/:tv_id", (req, res) => {
    console.log(req.body);
  // const tv_id = Number(req.params.tv_id);

  //   if (Number.isNaN(tv_id)) {
  //     res.send({ status: 0, reason: "Invalid entry" });
  //     return;
  //   }
  const name = req.params.name;

  const indexOf = req.series.findIndex((item) => {
    return (item.name === name);
  });

  req.series[indexOf] = { ...req.series[indexOf]}; 

  console.log(indexOf);

});

module.exports = router;
