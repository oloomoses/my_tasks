import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const TaskAdd = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name, description, avatar);
    setName('');
    setDescription('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        name="text"
        value={name}
        autoComplete="off"
        required
        placeholder="Task Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="task-input"
        name="text"
        value={description}
        placeholder="Task Description"
        autoComplete="off"
        required
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        className="task-input"
        name="text"
        value={avatar}
        placeholder="Avatar url"
        autoComplete="off"
        onChange={(e) => setAvatar(e.target.value)}
      />

      <button type="submit" className="btn">
        ADD
      </button>
    </form>
  );
};

TaskAdd.propTypes = {
  addTask: propTypes.func.isRequired,
};

export default TaskAdd;
