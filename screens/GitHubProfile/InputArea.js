import { View, Pressable, StyleSheet, TextInput, Image } from 'react-native';
import { TextBold } from 'components/themed';
import { useState } from 'react';
import useTheme from 'hooks/useTheme';

const InputArea = ({ curUsername, setCurUsername }) => {
  // a state that deals typing username in the input field
  const [username, setUsername] = useState(curUsername);

  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.inputArea,
        { backgroundColor: colors.backgroundSecondary },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../assets/images/icon-search.png')}
          style={{ width: 30, height: 30, marginRight: 5 }}
        />
        <TextInput
          style={[styles.input, { color: colors.text }]}
          value={username}
          keyboardType='default'
          placeholder='Enter GitHub username'
          placeholderTextColor='white'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(text) => setUsername(text)}
          testID='inputArea'
        />
      </View>
      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        testID='searchButton'
        onPress={() => setCurUsername(username)}
      >
        <TextBold style={{ color: colors.text }}>Search</TextBold>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  input: {
    fontFamily: 'SpaceMono-Regular',
    marginLeft: 5,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputArea;
