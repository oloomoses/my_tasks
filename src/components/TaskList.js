/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Stats from './Stats';

const TaskList = ({ tasks, updateTask }) => {
  const toggleTaskComplete = (id) => {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          complete: !task.complete,
          completedTime: new Date().toLocaleTimeString(),
        };
      }
      return task;
    });

    updateTask(updatedTask);
  };

  return (
    <>
      <ul className="task-list">
        {
        tasks.map((task) => (

          <li className="task stack-small" key={task.id}>

            <div className="avatar">
              <img
                src={task.avatar}
                alt="A"
                className="avatar-img"
                onError={(e) => {
                  if (e.target.src !== 'CE6.png') {
                    e.target.src = 'CE6.png';
                  }
                }}
              />
            </div>

            <div className="task-td">
              <div className="task-title">{task.name}</div>
              <div className="task-description">{task.description}</div>
            </div>

            <div className="cb">
              {task.complete ? (
                <div className="completed-time">{task.completedTime}</div>
              ) : (
                <input id="todo-0" type="checkbox" defaultChecked={task.complete} onChange={() => toggleTaskComplete(task.id)} />
              )}

            </div>

          </li>
        ))
      }

      </ul>
      <hr />
      <Stats />
    </>
  );
};

TaskList.propTypes = {
  tasks: propTypes.array.isRequired,
  updateTask: propTypes.func.isRequired,
};

export default TaskList;
