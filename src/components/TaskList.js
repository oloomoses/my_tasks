import React from 'react';
import Stats from './Stats';

const TaskList = () => (
  <>
    <ul className="task-list">
      <li className="task stack-small">
        <div className="avatar">
          A
        </div>

        <div className="task-td">
          <div className="task-title">Task 1 Name</div>
          <div className="task-description">Any meal of the day</div>
        </div>

        <div className="cb">
          <input id="todo-0" type="checkbox" defaultChecked />
        </div>

      </li>

      <li className="task stack-small">
        <div className="avatar">
          A
        </div>

        <div className="task-td">
          <div className="task-title">Task 2 Name</div>
          <div className="task-description">Double GDP Assesment</div>
        </div>

        <div className="cb">
          <input id="todo-0" type="checkbox" defaultChecked />
        </div>

      </li>

      <li className="task stack-small">
        <div className="avatar">
          A
        </div>

        <div className="task-td">
          <div className="task-title">Task 3 Name</div>
          <div className="task-description">Nap or night time.</div>
        </div>

        <div className="cb">
          <input id="todo-0" type="checkbox" defaultChecked />
        </div>

      </li>
    </ul>
    <hr />
    <Stats />
  </>
);

export default TaskList;
