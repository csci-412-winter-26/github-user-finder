import { ScrollView, StyleSheet, Pressable, View } from 'react-native';
import { useState } from 'react';
import { Text } from 'components/themed';
import Header from './Header';
import { Main as MainLayout } from 'layouts/Main';
// import { useContext } from 'react';
// import { ThemeContext } from 'context/theme';
import useTheme from 'hooks/useTheme';

// create a button row component to display a circle button and a text label
const ButtonRow = ({ label, clicked, onPress }) => {
  const { theme, colors } = useTheme();

  return (
    <Pressable style={[styles.row, { backgroundColor: colors.background }]} onPress={onPress}>
      <View
        style={[
          styles.checkbox,
          {
            borderColor: colors.text,
            backgroundColor: clicked ? colors.primary : 'transparent',
          },
        ]}
      />
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
    </Pressable>
  );
};

const Settings = () => {
  // access theme context to get current theme and colors
  const { theme, colors, setTheme } = useTheme();
  // a state variable represents clicked or not
  const [clicked, setClicked] = useState(true);

  // a function to flip the clicked state value
  const toggleClicked = (label) => {
    setClicked((prevValue) => {
      console.log('Previous clicked value:', prevValue);
      return !prevValue;
    });

    if (label === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  console.log('Current theme:', theme);
  console.log('Current colors:', colors);

  return (
    <MainLayout>
      <View style={{ padding: 20 }}>
        <Header style={{ padding: 20 }} />
        <ScrollView style={{ padding: 20 }} keyboardShouldPersistTaps='handled'>
          <ButtonRow label='dark' clicked={clicked} onPress={() => toggleClicked('dark')} />
          <ButtonRow label='light' clicked={!clicked} onPress={() => toggleClicked('light')} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  border: {
    flex: 1,
    height: 1,
    backgroundColor: 'red',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 10,
  },
});

export default Settings;
