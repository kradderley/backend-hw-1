// not working

const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addTvShow } = require("../mysql/queries");

router.post("/tvshow", async (req, res) => {
  const { adult, name, original_language, overview, user_id } = req.body;

  // if (
  //   !adult ||
  //   !name ||
  //   !original_language ||
  //   !overview ||
  //   typeof adult !== "boolean" ||
  //   typeof name !== "string" ||
  //   typeof original_language !== "string" ||
  //   typeof overview !== "string"
  // ) {
  //   res.send({ status: 0, reason: "Not enough/incorrect information added" });
  //   return;
  // }

  try {
    await asyncMySQL(
      addTvShow(adult, name, original_language, overview, user_id)
    );
    res.send({ status: 1 });
  } catch (error) {
    console.log(error);
    res.send({ status: 0 });
  }
});

module.exports = router;
