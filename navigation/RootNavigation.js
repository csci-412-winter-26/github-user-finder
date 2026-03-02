import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ThemeProvider } from 'context/theme';
import { UsersProvider } from 'context/users';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
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
    <ThemeProvider>
      <UsersProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </UsersProvider>
    </ThemeProvider>
  );
};

export default RootNavigation;
