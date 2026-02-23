import { View, ScrollView } from 'react-native';
import Header from './Header';
// import UserList from './UserList';
import { Main as MainLayout } from 'layouts/Main';

const GitHubProfiles = () => {
  return (
    <MainLayout>
      <View style={{ padding: 20 }}>
      <Header />
      <ScrollView keyboardShouldPersistTaps='handled'>
        {/* <UserList navigation={navigation} /> */}
      </ScrollView>
      </View>
    </MainLayout>
  );
};

export default GitHubProfiles;
