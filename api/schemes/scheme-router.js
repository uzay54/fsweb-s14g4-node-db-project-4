

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ message: "yürü be oğlum" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;