import { View } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import { Main as MainLayout } from '../../layouts/Main';

const Settings = () => {
  return (
    <MainLayout>
      <View style={{ padding: 20 }}>
        <Header style={{ padding: 20 }} />
        <ScrollView
          style={{ padding: 20 }}
          keyboardShouldPersistTaps='handled'
        ></ScrollView>
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
