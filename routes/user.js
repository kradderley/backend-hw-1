const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { userInfo } = require("../mysql/queries");
const sha256 = require("sha256");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const shaPassword = sha256(password);

  try {
    const result = await asyncMySQL(userInfo(email, shaPassword));
    res.send({ status: 1, userId: result.insertId, reason: "User added successfully" });
  } catch (error) {
    res.send({ status: 0, reason: "User already added" });
  }
});

module.exports = router;
