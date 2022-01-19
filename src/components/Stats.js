import React from 'react';

const Stats = () => (
  <>
    <div className="stats-title">Stats</div>
    <ul className="stats">
      <li className="stat stack-small">
        <div className="stat-value">32</div>
        <div className="stat-description">Total Tasks Closed</div>
      </li>

      <li className="stat stack-small">
        <div className="stat-value">32</div>
        <div className="stat-description">Total Tasks Open</div>
      </li>

      <li className="stat stack-small">
        <div className="stat-value">32%</div>
        <div className="percentage-description">Completion Rate</div>
      </li>
    </ul>

  </>
);

export default Stats;
