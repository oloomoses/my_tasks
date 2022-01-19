import React from 'react';

const TaskAdd = () => (
  <form>
    <h2 className="form-title">Add Task</h2>
    <input
      type="text"
      className="task-input"
      name="text"
      autoComplete="off"
      placeholder="Task Name"
    />

    <input
      type="text"
      className="task-input"
      name="text"
      placeholder="Task Description"
      autoComplete="off"
    />

    <button type="submit" className="btn">
      ADD
    </button>
  </form>
);

export default TaskAdd;
