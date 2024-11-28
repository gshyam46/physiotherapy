import React, { useState } from "react";
import "./ExerciseMenu.css";

const ExerciseMenu = ({ categories, onExerciseSelect }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="menu-container">
      <label className="menu-label">Body Part Categories:</label>
      <div className="menu">
        {categories.map((category) => (
          <div
            key={category.name}
            className="menu-category"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {category.name}
            {hoveredCategory === category.name && (
              <div className="submenu">
                {category.exercises.map((exercise) => (
                  <div
                    key={exercise}
                    className="submenu-item"
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

export default ExerciseMenu;
