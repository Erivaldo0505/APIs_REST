import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
  RefreshControl,
} from 'react-native';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/users?size=10');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Erro ao buscar usuários');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#00aaff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Usuários Aleatórios</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectUser(item)}>
            <View style={styles.card}>
              <Image source={{ uri: item.avatar }} style={styles.icon} />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const UserDetails = ({ user, onGoBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailCard}>
        <Image source={{ uri: user.avatar }} style={styles.largeIcon} />
        <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.description}>Username: {user.username}</Text>
        <Text style={styles.description}>Gênero: {user.gender}</Text>
        <Text style={styles.description}>Data de Nascimento: {user.date_of_birth}</Text>
        <Text style={styles.description}>Telefone: {user.phone_number}</Text>
      </View>
      <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <View style={styles.container}>
      {selectedUser ? (
        <UserDetails user={selectedUser} onGoBack={() => setSelectedUser(null)} />
      ) : (
        <UserList onSelectUser={(user) => setSelectedUser(user)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#ff0000',
  },
  headerTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#2b2b2b',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#bbb',
  },
  largeIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  detailCard: {
    backgroundColor: '#2b2b2b',
    padding: 30,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  description: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 5,
    textAlign: 'center',
  },
  goBackButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#333333',
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default App;








