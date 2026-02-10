// test if the expo app renders without crashing
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import GitHubProfile from '../../screens/GitHubProfile';

test('simulate user behavior', async () => {
  // render the GitHubProfile component
  const { getByTestId, getByText, queryAllByText } = render(<GitHubProfile />);
  // rettrieve the input area using getByTestId
  const inputArea = getByTestId('inputArea');
  // retrieve the search button using getByText
  const searchButton = getByTestId('searchButton');
  // simulate user typing 'hh' in the input area

  fireEvent.changeText(inputArea, 'hh');
  // simulate user pressing the search button
  fireEvent.press(searchButton);
  // expect the header text to be 'Hippie Hacker'
  
  // expect headerText not to be null
  await waitFor(
    () => {
      const nameTexts = queryAllByText('Hippie Hacker');
      // there are multiple text components with the same text 'Hippie Hacker', so we need to check if at least one of them is not null
      expect(nameTexts[0]).not.toBeNull();
      
    },
    { timeout: 7000 },
  );
}, 12000);
