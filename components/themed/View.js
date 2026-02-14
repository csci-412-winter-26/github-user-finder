import { View as DefaultView } from 'react-native';
import useTheme from '../../hooks/useTheme';

const View = ({ style, ...rest }) => {
  const { colors } = useTheme();
  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...rest}
    />
  );
};

const ViewContrast = ({ style, ...rest }) => {
  const { colors } = useTheme();
  
  return (
    <DefaultView
      style={[{ backgroundColor: colors.backgroundSecondary }, style]}
      {...rest}
    />
  );
};

export { View, ViewContrast };
export default View;