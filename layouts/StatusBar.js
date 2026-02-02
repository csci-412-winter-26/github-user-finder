import { StatusBar as DefaultStatusBar } from 'react-native';

const StatusBar = ({ ...rest }) => {

  return (
    <DefaultStatusBar
      barStyle='dark-content'
      backgroundColor='#141d2f'
      {...rest}
    />
  );
};

export default StatusBar;
export { StatusBar };