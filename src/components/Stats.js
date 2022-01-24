import React from 'react';
import { PropTypes } from 'prop-types';

const Stats = ({ openTasks, closedTasks }) => (
  <>
    <div className="stats-title">Stats</div>
    <ul className="stats">
      <li className="stat stack-small">
        <div className="stat-value">{closedTasks}</div>
        <div className="stat-description">Total Tasks Closed</div>
      </li>

      <li className="stat stack-small">
        <div className="stat-value">{openTasks}</div>
        <div className="stat-description">Total Tasks Open</div>
      </li>

      <li className="stat stack-small">
        <div className="stat-value">
          {Math.floor((closedTasks / (closedTasks + openTasks)) * 100)}
          %
        </div>
        <div className="percentage-description">Completion Rate</div>
      </li>
    </ul>

  </>
);

Stats.propTypes = {
  openTasks: PropTypes.number.isRequired,
  closedTasks: PropTypes.number.isRequired,
};

export default Stats;
