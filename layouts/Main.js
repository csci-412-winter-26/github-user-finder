import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StatusBar from './StatusBar';

const Main = ({ children }) => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#141d2f' }}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Main;
export { Main };
