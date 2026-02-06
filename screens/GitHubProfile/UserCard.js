import { StyleSheet, Image } from 'react-native';
import { Text, TextBold, View, ViewContrast } from '../../components/themed';
import { Twitter, Company, Location, Website } from '../../components/svgr';

const UserCard = ({ userData, isLoading, error }) => {
  if (isLoading)
    return (
      <ViewContrast
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Searching ...</Text>
      </ViewContrast>
    );

  if (error)
    return (
      <ViewContrast
        style={{
          ...styles.card,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <NotFound />
        <Text>There's no such a profile</Text>
        <Text>Or something else is wrong</Text>
      </ViewContrast>
    );

  if (userData === null) return null;

  return (
    <ViewContrast style={styles.card}>
      <ViewContrast style={styles.cardHeader}>
        <Image source={{ uri: userData.avatar_url }} style={styles.avatar} />
        <ViewContrast style={styles.generalInfo}>
          <TextBold style={styles.name}>{userData.name}</TextBold>
          <Text style={styles.username}>@{userData.login}</Text>
          <Text style={styles.date}>{userData.created_at}</Text>
        </ViewContrast>
      </ViewContrast>
      <ViewContrast style={styles.bioRow}>
        <Text style={styles.bioText}>
          {userData.bio !== null ? userData.bio : 'This profile has no bio'}
        </Text>
      </ViewContrast>
      <View style={styles.statusRow}>
        <View style={styles.statusLabels}>
          <View>
            <Text style={styles.labelText}>Repos</Text>
            <Text style={styles.statusData}>{userData.public_repos}</Text>
          </View>
          <View>
            <Text style={styles.labelText}>Followers</Text>
            <Text style={styles.statusData}>{userData.followers}</Text>
          </View>
          <View>
            <Text style={styles.labelText}>Following</Text>
            <Text style={styles.statusData}>{userData.following}</Text>
          </View>
        </View>
      </View>
      <ViewContrast style={styles.social}>
        <ViewContrast style={styles.socialAccount}>
          <ViewContrast style={styles.socialIcon}>
            <Location color='white' />
          </ViewContrast>
          <Text style={styles.socialText}>
            {userData.location ? userData.location : 'Not available'}
          </Text>
        </ViewContrast>
        <ViewContrast style={styles.socialAccount}>
          <ViewContrast style={styles.socialIcon}>
            <Twitter color='white' />
          </ViewContrast>
          <Text style={styles.socialText}>
            {userData.twitter_username ? userData.twitter_username : 'Not available'}
          </Text>
        </ViewContrast>
        <ViewContrast style={styles.socialAccount}>
          <ViewContrast style={styles.socialIcon}>
            <Website color='white' />
          </ViewContrast>
          <Text style={styles.socialText}>
            {userData.blog ? userData.blog : 'Not available'}
          </Text>
        </ViewContrast>
        <ViewContrast style={styles.socialAccount}>
          <ViewContrast style={styles.socialIcon}>
            <Company color='white' />
          </ViewContrast>
          <Text style={styles.socialText}>
            {userData.company ? userData.company : 'Not available'}
          </Text>
        </ViewContrast>
      </ViewContrast>
    </ViewContrast>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
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
  },
  username: {
    color: '#0079ff',
  },
  bioRow: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusRow: {
    borderRadius: 10,
    padding: 30,
  },
  statusLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: '#888888',
  },
  statusData: {
    fontSize: 20,
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
  },
});

export default UserCard;
