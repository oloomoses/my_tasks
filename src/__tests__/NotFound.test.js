import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NotFound from '../components/NotFound';

it('matches the snapshot', () => {
  const tree = renderer.create(<BrowserRouter><NotFound /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
