import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { Main as MainLayout } from '../../layouts/Main';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';

const GitHubProfile = () => {
  // a state variable to hold the username
  const [curUsername, setCurUsername] = useState('octocat');
  // a state variable to hold the user data
  const [userData, setUserData] = useState(null);
  // a state varialbe to hold loading state
  const [isLoading, setIsLoading] = useState(false);
  // a state variable to hold error state
  const [error, setError] = useState(null);

  // // function to fetch user data from GitHub API
  // const fetchUserData = async (username) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get(
  //       `https://api.github.com/users/${username}`,
  //     );
  //     setUserData((oldUserData) => {
  //       // update the user data state with the new data
  //       return response.data;
  //     });
  //   } catch (err) {
  //     setError('User not found');
  //     setUserData(null);
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    // define cancled as a flag to indicate whether the component is unmounted
    let canceled = false;
    // fetch the default user data when the component mounts
    const fetchUserData = async (username) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`,
        );
        if (!canceled)
          setUserData((oldUserData) => {
            // update the user data state with the new data
            return response.data;
          });
      } catch (err) {
        setError('User not found');
        setUserData(null);
      }
      setIsLoading(false);
    };

    fetchUserData(curUsername);

    // cleanup function to reset the user data when the component unmounts
    () => {
      canceled = true;
    };
  }, [curUsername]);

  return (
    <MainLayout>
      <View style={{ padding: 20 }}>
        <Header />
        <ScrollView keyboardShouldPersistTaps='handled'>
          <InputArea
            curUsername={curUsername}
            setCurUsername={setCurUsername}
          />
          <UserCard userData={userData} isLoading={isLoading} error={error} />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default GitHubProfile;
