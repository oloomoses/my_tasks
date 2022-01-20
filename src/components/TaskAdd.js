import React from 'react';

const TaskAdd = () => (
  <form>
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
