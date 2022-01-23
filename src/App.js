/* eslint-disable no-unused-expressions */
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import TaskAdd from './components/TaskAdd';
import NotFound from './components/NotFound';

const DATA = [
  {
    id: 1, name: 'Task name 1', description: 'task name 1 description', complete: false, completedTime: '',
  },
  {
    id: 2, name: 'Task name 2', description: 'task name 2 description', complete: true, completedTime: '',
  },
  {
    id: 3, name: 'Task name 3', description: 'task name 3 description', complete: false, completedTime: '',
  },
];

function App() {
  const [mode, setMode] = useState('light');
  const [tasks, setTasks] = useState(DATA);

  const modeToggle = () => {
    mode === 'light' ? setMode('dark') : setMode('light');
  };

  const addTask = (name, description) => {
    const newTask = {
      id: `id-${nanoid()}`, name, description, complete: false, completedTime: '',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(updatedTask);
  };

  return (
    <div className="">
      <div className="header-background" />
      <div className="App">
        <div className="container">
          <Nav toggle={modeToggle} mode={mode} />
          <Routes>
            <Route path="/" element={<TaskList tasks={tasks} updateTask={updateTask} />} />
            <Route path="/addTask" element={<TaskAdd addTask={addTask} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
