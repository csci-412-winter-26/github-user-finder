import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StatusBar from './StatusBar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Main = ({ children }) => {
  const [loaded, error] = useFonts({
    'SpaceMono-Bold': require('../assets/fonts/SpaceMono-Bold.ttf'),
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
