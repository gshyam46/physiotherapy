const ExerciseProgram = require("../models/programModel");

const createProgram = async (req, res) => {
  const { name, exercises, days, frequency, breakInterval, notes } = req.body;

  if (!name || exercises.length === 0) {
    return res
      .status(400)
      .json({ error: "Program name and exercises are required" });
  }

  const newProgram = new ExerciseProgram({
    name,
    exercises,
    days,
    frequency,
    breakInterval,
    notes,
  });

  try {
    await newProgram.save();
    res.status(201).json({ message: "Program saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save program" });
  }
};

module.exports = { createProgram };
