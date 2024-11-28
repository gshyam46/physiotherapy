import React from "react";
import "./Notes.css";

const Notes = ({ notes, onNotesChange }) => {
  return (
    <div className="notes">
      <label htmlFor="notes-textarea" className="notes-label">
        Therapist Notes:
      </label>
      <textarea
        id="notes-textarea"
        className="notes-textarea"
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="Add Notes"
      ></textarea>
    </div>
  );
};

export default Notes;
