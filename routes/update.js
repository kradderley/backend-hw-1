// const express = require("express");
// const router = express.Router();
// const asyncMySQL = require("../mysql/connection");

// router.patch("/tvshow/:tv_id", async (req, res) => {
//   const tv_id = Number(req.params.tv_id);
//   console.log(req.body, tv_id);

//   if (Number.isNaN(tv_id)) {
//     res.send({ status: 0, reason: "Invalid entry" });
//     return;
//   }

//   const { name, adult, original_language, overview } = req.body;

//   try {
//     if (name) {
//       await asyncMySQL(`UPDATE tv_show SET name = "${name}"
//                         WHERE id LIKE "${tv_id}";`);
//     }
//     if (adult && typeof adult === "boolean") {
//       await asyncMySQL(`UPDATE tv_show SET adult = "${adult}"
//                         WHERE id LIKE "${tv_id}";`);
//     }
//     if (
//       original_language &&
//       typeof original_language === "string" &&
//       original_language.length === 2
//     ) {
//       await asyncMySQL(`UPDATE tv_show SET original_language = "${original_language}"
//                         WHERE id LIKE "${tv_id}";`);
//     }
//     if (overview && typeof overview === "string") {
//       await asyncMySQL(`UPDATE tv_show SET overview = "${overview}"
//                         WHERE id LIKE "${tv_id}";`);
//     }

//     res.send({ status: 1, reason: "Update Successful" });
//   } catch (error) {
//     console.log(error)
//     res.send({ status: 0 });
//   }
// });

// module.exports = router;
