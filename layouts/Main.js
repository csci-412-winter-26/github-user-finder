import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StatusBar from './StatusBar';
import useTheme from 'hooks/useTheme';

const Main = ({ children }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export { Main };
export default Main;

