import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';

let wrapper;
let mode;
let toggle;
beforeEach(() => {
  mode = 'light';
  toggle = () => (mode === 'light' ? 'dark' : 'light');
  wrapper = shallow(<BrowserRouter><Nav mode={mode} toggle={toggle} /></BrowserRouter>);
});

test('has a toggle icon', () => {
  expect(wrapper.find('Brightness4SharpIcon')).toBeTruthy();
});

test('It has an add icon', () => {
  expect(wrapper.find('AddIcon')).toBeTruthy();
});

test('It has a back icon', () => {
  expect(wrapper.find('.back')).toBeTruthy();
});

it('matches the snapshot', () => {
  const tree = renderer.create(
    <BrowserRouter><Nav mode={mode} toggle={toggle} /></BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
