import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import TaskAdd from './components/TaskAdd';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className="header-background" />
      <div className="App">
        <div className="container">

          <Nav />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/addTask" element={<TaskAdd />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
