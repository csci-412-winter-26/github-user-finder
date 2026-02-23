const React = require('react');

module.exports = {
  createBottomTabNavigator: () => ({
    Navigator: ({ children }) => React.createElement(React.Fragment, null, children),
    Screen: ({ component: Component }) => React.createElement(Component),
  }),
};