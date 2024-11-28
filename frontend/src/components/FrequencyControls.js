import React from "react";
import "./FrequencyControls.css";

const FrequencyControls = ({
  dailyFrequency,
  setDailyFrequency,
  breakInterval,
  setBreakInterval,
}) => {
  return (
    <div className="frequency-controls">
      <div className="control">
        <label>Break Interval (Minutes)</label>
        <input
          type="number"
          value={breakInterval}
          onChange={(e) => setBreakInterval(Number(e.target.value))}
        />
      </div>
      <div className="control">
        <label>Daily Frequency</label>
        <input
          type="number"
          value={dailyFrequency}
          onChange={(e) => setDailyFrequency(Number(e.target.value))}
          min="1"
        />
      </div>
    </div>
  );
};

export default FrequencyControls;
