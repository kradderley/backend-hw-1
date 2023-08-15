const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const {
  addTvShow,
  updateTvName,
  updateTvType,
  updateTvLang,
  updateTvOverview,
} = require("../mysql/queries");
const { deleteTvShow } = require("../mysql/queries");
const { getTvById } = require("../mysql/queries");


// CREATE

router.post("/", async (req, res) => {
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

// DELETE
router.delete("/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id)) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const result = await asyncMySQL(deleteTvShow(tv_id));
  res.send({ result });
});

// UPDATE
router.patch("/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);
  console.log(req.body, tv_id);

  if (Number.isNaN(tv_id)) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const { name, adult, original_language, overview } = req.body;

  try {
    if (name) {
      await asyncMySQL(updateTvName(name, tv_id));
    }
    if (adult && typeof adult === "boolean") {
      await asyncMySQL(updateTvType(adult, tv_id));
    }
    if (
      original_language &&
      typeof original_language === "string" &&
      original_language.length === 2
    ) {
      await asyncMySQL(updateTvLang(original_language, tv_id));
    }
    if (overview && typeof overview === "string") {
      await asyncMySQL(updateTvOverview(overview, tv_id));
    }

    res.send({ status: 1, reason: "Update Successful" });
  } catch (error) {
    res.send({ status: 0 });
  }
});

// READ
router.get("/:tv_id", async (req, res) => {
  const tv_id = Number(req.params.tv_id);

  if (Number.isNaN(tv_id) || tv_id < 1) {
    res.send({ status: 0, reason: "Invalid entry" });
    return;
  }

  const results = await asyncMySQL(getTvById(tv_id));

  if (results.length > 0) {
    res.send({ results });
    return;
  }
  res.send({ status: 0, reason: "Entry not found" });
});

module.exports = router;
