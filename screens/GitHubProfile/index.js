import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Main as MainLayout } from '../../layouts/Main';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';
import useData from '../../hooks/useData';

const GitHubProfile = () => {
  // a state variable to hold the username
  const [curUsername, setCurUsername] = useState('octocat');

  // use the custom hook to fetch data from the GitHub API
  const { data, loading, error } = useData({
    url: `https://api.github.com/users/${curUsername}`,
  });

  return (
    <MainLayout>
      <View style={{ padding: 20 }}>
        <Header />
        <ScrollView keyboardShouldPersistTaps='handled'>
          <InputArea
            curUsername={curUsername}
            setCurUsername={setCurUsername}
          />
          <UserCard userData={data} isLoading={loading} error={error} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default GitHubProfile;
