import SwipeToDelete from './SwipeToDelete';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useUsers } from 'hooks/useUsers';
import { Text } from 'components/themed';

const UserList = ({ navigation }) => {
  // one state that stores all users
  const { users, loading, error, deleteUser } = useUsers();

  // delete a user from the list
  const deleteUserFront = (index) => {
    // retrieve the user id based on index
    const userId = users[index].id;
    
    // delete the user from the backend
    deleteUser(userId);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, marginBottom: 30 }}>
      {users.map((user, i) => (
        <SwipeToDelete
          navigation={navigation}
          user={user}
          onDelete={() => deleteUserFront(i)}
          key={i + user.login}
        />
      ))}
    </GestureHandlerRootView>
  );
};

export default UserList;
