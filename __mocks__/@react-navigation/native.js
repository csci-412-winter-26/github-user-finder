const React = require('react');

module.exports = {
  NavigationContainer: ({ children }) => React.createElement(React.Fragment, null, children),
  useNavigation: () => ({ navigate: jest.fn() }),
  useRoute: () => ({ params: {} }),
  useFocusEffect: jest.fn(),
};