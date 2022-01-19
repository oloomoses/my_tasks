import './App.css';
import Nav from './components/Nav';
import Stats from './components/Stats';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <div className="header-background" />
      <div className="App">
        <div className="container">

          <Nav />
          <TaskList />
          <hr />

          <Stats />

        </div>
      </div>
    </>
  );
}

export default App;
