const express = require("express");
const {
  getPrograms,
  createProgram,
} = require("../controllers/exerciseProgramController");

const router = express.Router();

router.post("/", createProgram);

module.exports = router;
