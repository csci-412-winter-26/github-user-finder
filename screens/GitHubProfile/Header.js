import { StyleSheet, Pressable } from 'react-native';
import { Fragment } from 'react';
import { View, TextBold, Icon } from 'components/themed';
import useUsers from 'hooks/useUsers';

const Header = ({ user, style, ...rest }) => {
  const { users, loading, createUser } = useUsers();

  const addUserFront = () => {
    if (user !== null) {
      createUser({
        login: user.login,
        id: user.id,
        avatar_url: user.avatar_url,
        name: user.name || user.login
      });
    }
  };

  if (loading)
    return (
      <View style={[styles.header, style]} {...rest} testID='test-header'>
        <TextBold style={styles.title} testID='test-header-text'>
          devfinder
        </TextBold>
      </View>
    );

  return (
    <View style={styles.header}>
      <TextBold style={styles.title}>devfinder</TextBold>

      {user === null ? (
        <Fragment />
      ) : users.some((u) => u.login === user.login) ? (
        <Icon name='checkmark-circle' color='green' size={32} />
      ) : (
        <Pressable onPress={addUserFront}>
          <Icon name='add-circle-outline' size={32} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    lineHeight: 30,
  },
});

export default Header;
