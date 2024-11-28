import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./ExerciseList.css";

const ExerciseList = ({ exercises, setExercises }) => {
  const handleInputChange = (index, field, value) => {
    const updatedExercises = [...exercises];
    updatedExercises[index][field] = value;
    setExercises(updatedExercises);
  };

  const handleDelete = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  // Handle the drag-and-drop functionality
  const handleDragEnd = (result) => {
    if (!result.destination) return; // If no destination, do nothing

    const reorderedExercises = Array.from(exercises);
    const [moved] = reorderedExercises.splice(result.source.index, 1);
    reorderedExercises.splice(result.destination.index, 0, moved);

    setExercises(reorderedExercises);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="exerciseList">
        {(provided) => (
          <div
            className="exercise-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {exercises.map((exercise, index) => (
              <Draggable key={index} draggableId={String(index)} index={index}>
                {(provided) => (
                  <div
                    className="exercise-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {/* Exercise Name */}
                    <div className="field">
                      <label htmlFor={`name-${index}`} className="field-label">
                        Exercise Name
                      </label>
                      <input
                        id={`name-${index}`}
                        type="text"
                        placeholder="Exercise Name"
                        value={exercise.name}
                        onChange={(e) =>
                          handleInputChange(index, "name", e.target.value)
                        }
                      />
                    </div>

                    {/* Sets */}
                    <div className="field">
                      <label htmlFor={`sets-${index}`} className="field-label">
                        Sets
                      </label>
                      <input
                        id={`sets-${index}`}
                        type="number"
                        value={exercise.sets}
                        onChange={(e) =>
                          handleInputChange(index, "sets", e.target.value)
                        }
                      />
                    </div>

                    {/* Reps */}
                    <div className="field">
                      <label htmlFor={`reps-${index}`} className="field-label">
                        Reps
                      </label>
                      <input
                        id={`reps-${index}`}
                        type="number"
                        value={exercise.reps}
                        onChange={(e) =>
                          handleInputChange(index, "reps", e.target.value)
                        }
                      />
                    </div>

                    {/* Hold Time */}
                    <div className="field">
                      <label
                        htmlFor={`holdTime-${index}`}
                        className="field-label"
                      >
                        Hold Time (s)
                      </label>
                      <input
                        id={`holdTime-${index}`}
                        type="number"
                        value={exercise.holdTime}
                        onChange={(e) =>
                          handleInputChange(index, "holdTime", e.target.value)
                        }
                      />
                    </div>

                    {/* Side Toggle */}
                    <div className="field">
                      <label className="field-label">Side</label>
                      <select
                        value={exercise.side}
                        onChange={(e) =>
                          handleInputChange(index, "side", e.target.value)
                        }
                      >
                        <option value="Left">Left</option>
                        <option value="Right">Right</option>
                        <option value="Both">Both</option>
                      </select>
                    </div>

                    {/* Delete Button */}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ExerciseList;
