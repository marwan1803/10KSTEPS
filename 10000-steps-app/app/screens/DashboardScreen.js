import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Bon retour, Thomas</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>7,450</Text>
          <Text style={styles.progressSubtext}>/ 10,000 pas</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>350</Text>
            <Text style={styles.statLabel}>Kcal</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>5.2</Text>
            <Text style={styles.statLabel}>Km</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Min</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Démarrer une activité</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122017',
  },
  header: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 48,
  },
  progressText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressSubtext: {
    fontSize: 18,
    color: '#94a3b8',
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 16,
    color: '#94a3b8',
  },
  button: {
    backgroundColor: '#39E079',
    paddingVertical: 16,
    marginHorizontal: 24,
    borderRadius: 999,
    alignItems: 'center',
  },
  buttonText: {
    color: '#122017',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;