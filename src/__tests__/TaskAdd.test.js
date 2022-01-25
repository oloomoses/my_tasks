import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import TaskAdd from '../components/TaskAdd';

let wrapper;
let addTask;
beforeEach(() => {
  addTask = (TaskName, TaskDescription, Avatar) => ({ TaskName, TaskDescription, Avatar });
  wrapper = shallow(<BrowserRouter><TaskAdd addTask={addTask} /></BrowserRouter>);
});

test('has a form', () => {
  expect(wrapper.find('form')).toBeTruthy();
});

test('has a submit button', () => {
  expect(wrapper.find('button')).toBeTruthy();
});

it('matches the snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter><TaskAdd addTask={addTask} /></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
