import React, { useState } from "react";
import "./ExerciseDropdown.css";

const ExerciseDropdown = ({ categories, onExerciseSelect }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="dropdown-container">
      <label htmlFor="body-part-select" className="dropdown-label">
        Body Part Categories:
      </label>
      <div className="dropdown">
        {categories.map((category) => (
          <div
            key={category.name}
            className="dropdown-category"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {category.name}
            {hoveredCategory === category.name && (
              <div className="dropdown-submenu">
                {category.exercises.map((exercise) => (
                  <div
                    key={exercise}
                    className="dropdown-exercise"
                    onClick={() => onExerciseSelect(exercise)}
                  >
                    {exercise}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDropdown;
