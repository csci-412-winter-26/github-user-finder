import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GitHubProfile from 'screens/GitHubProfile';
import Settings from 'screens/Settings';
import useTheme from 'hooks/useTheme';

const TabBarIcon = ({ color, size, name }) => (
  <Ionicons name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={{
        tabBarInactiveTintColor: colors.textMidContrast,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.background,
        },
      }}
    >
      <Tab.Screen
        name='Profile'
        component={GitHubProfile}
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <TabBarIcon name='ribbon-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: (props) => (
            <TabBarIcon name='settings-outline' {...props} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
