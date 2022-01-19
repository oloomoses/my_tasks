import './App.css';
import Nav from './components/Nav';
import Stats from './components/Stats';
// import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <div className="header-background" />
      <div className="App">
        <div className="container">

          <Nav />
          {/* <TaskList /> */}
          <form>
            <h2 className="form-title">Add Task</h2>
            <input
              type="text"
              className="input input__lg"
              name="text"
              autoComplete="off"
              placeholder="Task Name"
            />

            <input
              type="text"
              className="input input__lg"
              name="text"
              placeholder="Task Description"
              autoComplete="off"
            />

            <button type="submit" className="btn">
              Add
            </button>
          </form>
          <hr />

          <Stats />

        </div>
      </div>
    </>
  );
}

export default App;
