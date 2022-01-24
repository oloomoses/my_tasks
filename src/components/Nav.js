import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Brightness4SharpIcon from '@mui/icons-material/Brightness4Sharp';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
              <Brightness4SharpIcon className="night-mode" onClick={() => toggle()} />
              <Link to="/addTask"><AddIcon className="add-icon" /></Link>
            </div>
          </>

        ) : (

          <>
            <div className="header-title">Add Task</div>
            <div className="icons">
              <Link to="/">
                {' '}
                <ArrowBackIosNewIcon className="back" />
                {' '}
              </Link>
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
