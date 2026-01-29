import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchUser = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username.trim()}`);
      
      if (response.status === 404) {
        setError('User not found');
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>GitHub User Search</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter GitHub username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={searchUser}
          />
          <TouchableOpacity style={styles.button} onPress={searchUser}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {loading && (
          <View style={styles.centerContent}>
            <ActivityIndicator size="large" color="#0366d6" />
          </View>
        )}

        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {user && !loading && (
          <View style={styles.userCard}>
            <Image
              source={{ uri: user.avatar_url }}
              style={styles.avatar}
            />
            <Text style={styles.name}>{user.name || user.login}</Text>
            <Text style={styles.username}>@{user.login}</Text>
            
            {user.bio && (
              <Text style={styles.bio}>{user.bio}</Text>
            )}

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.public_repos}</Text>
                <Text style={styles.statLabel}>Repos</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.following}</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
            </View>

            {user.location && (
              <Text style={styles.info}>📍 {user.location}</Text>
            )}
            {user.company && (
              <Text style={styles.info}>🏢 {user.company}</Text>
            )}
            {user.blog && (
              <Text style={styles.info}>🔗 {user.blog}</Text>
            )}
            {user.twitter_username && (
              <Text style={styles.info}>🐦 @{user.twitter_username}</Text>
            )}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#24292e',
  },
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5da',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#0366d6',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  centerContent: {
    marginTop: 40,
    alignItems: 'center',
  },
  errorContainer: {
    backgroundColor: '#ffeef0',
    borderWidth: 1,
    borderColor: '#d73a49',
    borderRadius: 6,
    padding: 16,
    marginTop: 20,
  },
  errorText: {
    color: '#d73a49',
    fontSize: 16,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#e1e4e8',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#24292e',
    marginBottom: 4,
  },
  username: {
    fontSize: 18,
    color: '#586069',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#24292e',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e1e4e8',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#24292e',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#586069',
  },
  info: {
    fontSize: 15,
    color: '#24292e',
    marginVertical: 4,
    width: '100%',
  },
});