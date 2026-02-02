import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import InputArea from './InputArea';
import Header from './Header';
import UserCard from './UserCard';

const GitHubProfile = () => {
  return (
    <View style={{ padding: 20 }} >
      <Header />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <InputArea />
        <UserCard />
      </ScrollView>
    </View>
  );
};

export default GitHubProfile;
