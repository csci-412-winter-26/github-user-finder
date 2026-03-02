import { Image, StyleSheet, Pressable } from 'react-native';
import { View, ViewContrast, Text, Icon } from 'components/themed';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {
  createAnimatedComponent,
  interpolate,
  useAnimatedStyle,
  Extrapolation,
} from 'react-native-reanimated';

const AnimatedView = createAnimatedComponent(View);

function ActionIcon({ translation, inputRange, outputRange, icon }) {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          translation.value,
          inputRange,
          outputRange,
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <AnimatedView style={[styles.buttonContent, animatedStyle]}>
      <Icon name={icon} color="white" size={25} />
    </AnimatedView>
  );
}

const SwipeToDelete = ({ navigation, user, onDelete }) => {
  const renderRightActions = (_progress, translation) => (
    <Pressable style={styles.deleteButton} onPress={onDelete}>
      <ActionIcon
        translation={translation}
        inputRange={[-100, 0]}
        outputRange={[0, 100]}
        icon="trash-outline"
      />
    </Pressable>
  );

  const renderLeftActions = (_progress, translation) => (
    <Pressable
      style={styles.accessButton}
      onPress={() => {
        navigation.navigate('Profile');
      }}
    >
      <ActionIcon
        translation={translation}
        inputRange={[0, 100]}
        outputRange={[-100, 0]}
        icon="ribbon-outline"
      />
    </Pressable>
  );

  return (
    <ReanimatedSwipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <ViewContrast style={styles.card}>
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
        <ViewContrast style={styles.generalInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.login}</Text>
        </ViewContrast>
      </ViewContrast>
    </ReanimatedSwipeable>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
  },
  accessButton: {
    width: 100,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006400',
  },
  buttonContent: {
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  generalInfo: {
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    borderRadius: 50,
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
});

export default SwipeToDelete;
