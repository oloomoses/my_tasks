import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  return (
    <div className="nav">
      {
        location.pathname === '/' ? (
          <>
            <div className="header-title">Tasks</div>
            <div className="icons">
              <div className="add-icon">N</div>
              <Link to="/addTask" className="night-mode">+</Link>
            </div>
          </>

        ) : (

          <>
            <div className="header-title">Add Task</div>
            <div className="icons">
              <Link to="/" className="night-mode"> Back </Link>
            </div>
          </>
        )
      }
    </div>

  );
};

export default Nav;
