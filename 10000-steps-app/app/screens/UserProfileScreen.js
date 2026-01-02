import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profil</Text>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.avatar} />
          <Text style={styles.name}>Marc Dupont</Text>
          <Text style={styles.memberSince}>Membre depuis 2023</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>ans</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>75</Text>
            <Text style={styles.statLabel}>kg</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>180</Text>
            <Text style={styles.statLabel}>cm</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102217',
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#1c2720',
    marginBottom: 16,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  memberSince: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 48,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#94a3b8',
  },
  logoutButton: {
    alignItems: 'center',
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
});

export default UserProfileScreen;