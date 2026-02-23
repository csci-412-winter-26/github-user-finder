// test if the expo app renders without crashing
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';
import GitHubProfile from '../screens/GitHubProfile';

test('renders correctly', async() => {
  const { getByText } = render(<App />);
  const headerText = getByText('devfinder');
  // expect headerText not to be null
  expect(headerText).not.toBeNull();
}, 9000);
