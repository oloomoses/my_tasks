import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<BrowserRouter><App /></BrowserRouter>);
});

test('renders Nav component', () => {
  expect(wrapper.find('Nav')).toBeTruthy();
});

test('renders TaskList component', () => {
  expect(wrapper.find('TaskList')).toBeTruthy();
});

test('renders AddTask component', () => {
  expect(wrapper.find('AddTask')).toBeTruthy();
});

test('renders NotFound component', () => {
  expect(wrapper.find('NotFound')).toBeTruthy();
});
