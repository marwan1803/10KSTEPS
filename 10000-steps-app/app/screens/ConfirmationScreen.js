import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <View style={styles.progressIndicator}>
            <View style={styles.progressStep} />
            <View style={styles.progressStep} />
            <View style={styles.progressStep} />
            <View style={[styles.progressStep, styles.activeStep]} />
          </View>
          <View style={{ width: 48 }} />
        </View>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Tout est prêt ?</Text>
          <Text style={styles.subtitle}>
            Vérifiez vos informations avant de commencer votre aventure.
          </Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Objectif quotidien</Text>
          <Text style={styles.stepGoal}>10 000 pas</Text>
        </View>
        <View style={styles.permissionsCard}>
          <Text style={styles.cardTitle}>Autorisations</Text>
          <View style={styles.permissionRow}>
            <Text>Santé (Apple Health)</Text>
            <Text style={styles.permissionStatus}>Activé</Text>
          </View>
          <View style={styles.permissionRow}>
            <Text>Notifications</Text>
            <Text style={styles.permissionStatus}>Activé</Text>
          </View>
          <View style={styles.permissionRow}>
            <Text>Localisation</Text>
            <Text style={styles.permissionStatus}>Activé</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          navigation.navigate('Main');
        }}>
          <Text style={styles.buttonText}>C'est parti !</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f7',
  },
  scrollContainer: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    fontSize: 24,
    color: '#111714',
  },
  progressIndicator: {
    flexDirection: 'row',
    gap: 4,
  },
  progressStep: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#dce5df',
  },
  activeStep: {
    backgroundColor: '#39E079',
    width: 32,
  },
  heroSection: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 8,
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  permissionsCard: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 24,
    marginBottom: 32,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  stepGoal: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 8,
  },
  permissionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  permissionStatus: {
    color: '#39E079',
    fontWeight: 'bold',
  },
  button: {
    height: 56,
    backgroundColor: '#39E079',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#1e293b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConfirmationScreen;