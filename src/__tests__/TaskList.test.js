import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TaskList from '../components/TaskList';

let wrapper;
let tasks;
let updateTask;
beforeEach(() => {
  tasks = [];
  updateTask = () => ({
    id: '3', name: 'Task name 3', description: 'task name 3 description', avatar: '', complete: false, completedTime: '',
  });
  wrapper = shallow(
    <BrowserRouter><TaskList tasks={tasks} updateTask={updateTask} /></BrowserRouter>,
  );
});

test('has stats', () => {
  expect(wrapper.find('Stats')).toBeTruthy();
});

it('matches the snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter><TaskList tasks={tasks} updateTask={updateTask} /></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
