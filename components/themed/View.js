import { View as DefaultView } from 'react-native';

const View = ({ style, ...rest }) => {
  return (
    <DefaultView
      style={[{ backgroundColor: "#141d2f" }, style]}
      {...rest}
    />
  );
};

const ViewContrast = ({ style, ...rest }) => {
  return (
    <DefaultView
      style={[{ backgroundColor: "#1e2a47" }, style]}
      {...rest}
    />
  );
};

export { View, ViewContrast };
export default View;