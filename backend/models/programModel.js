const mongoose = require("mongoose");

const exerciseProgramSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    exercises: [
      {
        name: { type: String, required: true },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true },
        holdTime: { type: Number, required: true },
        side: { type: String, required: true },
      },
    ],
    days: { type: [String], required: true },
    frequency: { type: Number, required: true },
    breakInterval: { type: Number, required: false },
    notes: { type: String },
  },
  { timestamps: true }
);

const ExerciseProgram = mongoose.model(
  "ExerciseProgram",
  exerciseProgramSchema
);

module.exports = ExerciseProgram;
