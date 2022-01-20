/* eslint-disable no-unused-expressions */
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import TaskAdd from './components/TaskAdd';
import NotFound from './components/NotFound';

function App() {
  const [mode, setMode] = useState('light');

  const modeToggle = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  return (
    <div className="">
      <div className="header-background" />
      <div className="App">
        <div className="container">

          <Nav toggle={modeToggle} mode={mode} />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/addTask" element={<TaskAdd />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
