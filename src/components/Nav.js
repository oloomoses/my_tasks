import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ toggle, mode }) => {
  const location = useLocation();

  useEffect(() => {
    document.body.className = mode;
  });

  return (
    <div className="nav">
      {
        location.pathname === '/' ? (
          <>
            <div className="header-title">Tasks</div>
            <div className="icons">
              <button type="button" className="add-icon" onClick={() => toggle()}>N</button>
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

Nav.propTypes = {
  toggle: propTypes.func.isRequired,
  mode: propTypes.string.isRequired,
};

export default Nav;
