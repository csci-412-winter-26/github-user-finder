import { View, Text, StyleSheet, Image } from 'react-native';
import Twitter from '../../components/svgr/Twitter';
import Company from '../../components/svgr/Company';
import Location from '../../components/svgr/Location';
import Website from '../../components/svgr/Website';

const UserCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/583231?v=4' }}
          style={styles.avatar}
        />
        <View style={styles.generalInfo}>
          <Text style={styles.name}>The Octocat</Text>
          <Text style={styles.username}>@github</Text>
          <Text style={styles.date}>2011-01-25T18:44:36Z</Text>
        </View>
      </View>
      <View style={styles.bioRow}>
        <Text style={styles.bioText}>This profile has no bio</Text>
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusLabels}>
          <View>
            <Text style={styles.labelText}>Repos</Text>
            <Text style={styles.statusData}>8</Text>
          </View>
          <View>
            <Text style={styles.labelText}>Followers</Text>
            <Text style={styles.statusData}>21677</Text>
          </View>
          <View>
            <Text style={styles.labelText}>Following</Text>
            <Text style={styles.statusData}>9</Text>
          </View>
        </View>
      </View>
      <View style={styles.social}>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Location color='white' />
          </View>
          <Text style={styles.socialText}>San Francisco</Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Twitter color='white' />
          </View>
          <Text style={styles.socialText}>Not available</Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Website color='white' />
          </View>
          <Text style={styles.socialText}>https://github.blog</Text>
        </View>
        <View style={styles.socialAccount}>
          <View style={styles.socialIcon}>
            <Company color='white' />
          </View>
          <Text style={styles.socialText}>@github</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    backgroundColor: '#1e2a47',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  generalInfo: {
    marginLeft: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    maxWidth: 80,
    maxHeight: 80,
  },
  name: {
    fontSize: 24,
    fontFamily: 'SpaceMono-Regular',
    color: 'white',
  },
  username: {
    color: '#0079ff',
    fontFamily: 'SpaceMono-Regular',
  },
  date: {
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
  bioRow: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bioText: {
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
  statusRow: {
    borderRadius: 10,
    padding: 30,
    backgroundColor: '#141d2f',
  },
  statusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#888888',
    fontFamily: 'SpaceMono-Regular',
  },
  statusData: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
  social: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  socialAccount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
  },
  socialText: {
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
    flexShrink: 1, // Allows text to shrink if needed
    color: 'white',
    fontFamily: 'SpaceMono-Regular',
  },
});

export default UserCard;
