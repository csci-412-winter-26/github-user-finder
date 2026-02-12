import { View, StyleSheet } from 'react-native';
import { TextBold } from '../../components/themed';

const Header = () => {
  return (
    <View style={styles.header}>
      <TextBold style={styles.title}>
        devfinder: Settings
      </TextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    lineHeight: 30,
  },
});

export default Header;
