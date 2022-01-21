/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Stats from './Stats';

const TaskList = ({ tasks }) => (
  <>
    <ul className="task-list">
      {
        tasks.map((task) => (

          <li className="task stack-small" key={task.id}>

            <div className="avatar">
              A
            </div>

            <div className="task-td">
              <div className="task-title">{task.name}</div>
              <div className="task-description">{task.description}</div>
            </div>

            <div className="cb">
              <input id="todo-0" type="checkbox" defaultChecked={task.complete} />
            </div>

          </li>
        ))
      }

    </ul>
    <hr />
    <Stats />
  </>
);

TaskList.propTypes = {
  tasks: propTypes.array.isRequired,
};

export default TaskList;
