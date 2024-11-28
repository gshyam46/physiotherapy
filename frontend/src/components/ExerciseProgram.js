import React, { useState } from "react";
import "./ExerciseProgram.css";
import ExerciseList from "./ExerciseList";
import Notes from "./Notes";
import WeekSelector from "./WeekSelector";
import FrequencyControls from "./FrequencyControls";
import ExerciseMenu from "./ExerciseMenu";
import "bootstrap/dist/css/bootstrap.min.css";

const ExerciseProgram = () => {
  const [programName, setProgramName] = useState("");
  const [exercises, setExercises] = useState([]);
  const [notes, setNotes] = useState("");
  const [daysSelected, setDaysSelected] = useState([]);
  const [dailyFrequency, setDailyFrequency] = useState(1);
  const [breakInterval, setBreakInterval] = useState(5);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const categories = [
    { name: "Lower Body", exercises: ["Squats", "Lunges"] },
    { name: "Upper Body", exercises: ["Push-ups", "Pull-ups"] },
    { name: "Core", exercises: ["Plank", "Crunches"] },
  ];

  const handleExerciseSelect = (exerciseName) => {
    setExercises([
      ...exercises,
      { name: exerciseName, sets: 1, reps: 1, holdTime: 1, side: "Left" },
    ]);
  };

  const handleSaveProgram = async () => {
    if (!programName || exercises.length === 0 || daysSelected.length === 0) {
      alert(
        "Please provide a program name, add at least one exercise, and select days."
      );
      return;
    }

    const programData = {
      name: programName,
      exercises,
      days: daysSelected,
      frequency: dailyFrequency,
      breakInterval: breakInterval,
      notes,
    };

    try {
      const response = await fetch("http://localhost:5000/api/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(programData),
      });

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        alert("Failed to save program.");
      }
    } catch (error) {
      console.error("Error saving program:", error);
    }
  };

  const handleClearAll = () => {
    setExercises([]);
    setProgramName("");
    setDaysSelected([]);
    setDailyFrequency(1);
    setNotes("");
    setBreakInterval(5);
  };

  return (
    <div className="exercise-program">
      <div className="header">
        <input
          type="text"
          placeholder="Program Name"
          value={programName}
          onChange={(e) => setProgramName(e.target.value)}
          className="input-field"
        />
        <button className="clear-btn" onClick={handleClearAll}>
          Clear All
        </button>
      </div>

      {/* Exercise Category Menu */}
      <ExerciseMenu
        categories={categories}
        onExerciseSelect={handleExerciseSelect}
      />
      <ExerciseList exercises={exercises} setExercises={setExercises} />

      {/* Frequency and Week Selector */}
      <div className="break-and-frequency">
        <FrequencyControls
          dailyFrequency={dailyFrequency}
          setDailyFrequency={setDailyFrequency}
          breakInterval={breakInterval}
          setBreakInterval={setBreakInterval}
        />
        <WeekSelector
          daysSelected={daysSelected}
          setDaysSelected={setDaysSelected}
        />
      </div>

      {/* Therapist Notes */}
      <Notes notes={notes} onNotesChange={setNotes} />

      {/* Save Program Button */}
      <div className="action-buttons">
        <button className="save-btn" onClick={handleSaveProgram}>
          Save Program
        </button>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Success</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>The program has been successfully saved!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowSuccessModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseProgram;
