import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

const InputArea = () => {
  return (
    <View style={styles.inputArea}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../assets/images/icon-search.png')}
          style={{ width: 30, height: 30, marginRight: 5 }}
        />
        <TextInput
          style={styles.input}
          value='octocat'
          keyboardType='default'
          placeholder='Enter GitHub username'
          placeholderTextColor='white'
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
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
    backgroundColor: '#1e2a47',
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  input: {
    fontFamily: 'SpaceMono-Regular',
    marginLeft: 5,
    color: 'white',
  },
  button: {
    backgroundColor: '#0079ff',
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'SpaceMono-Bold',
  },
});

export default InputArea;
