import React from "react";
import "./WeekSelector.css";

const WeekSelector = ({ daysSelected, setDaysSelected }) => {
  const handleDayToggle = (day) => {
    setDaysSelected((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  return (
    <div className="week-selector">
      <label className="week-selector-label">Select Days:</label>
      <div className="week-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <span
            key={day}
            className={`day-btn ${
              daysSelected.includes(day) ? "selected" : ""
            }`}
            onClick={() => handleDayToggle(day)}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeekSelector;
