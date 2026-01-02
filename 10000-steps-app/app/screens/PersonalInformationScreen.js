import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const PersonalInformationScreen = () => {
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
            <View style={[styles.progressStep, styles.activeStep]} />
            <View style={styles.progressStep} />
            <View style={styles.progressStep} />
          </View>
          <View style={{ width: 48 }} />
        </View>
        <View style={styles.heroSection}>
          <Text style={styles.step}>Étape 2/4</Text>
          <Text style={styles.title}>
            Apprenons à <Text style={styles.highlight}>nous connaître</Text>
          </Text>
          <Text style={styles.subtitle}>
            Ces informations nous permettent d'adapter vos défis quotidiens.
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.flex1]} placeholder="Prénom" />
            <TextInput style={[styles.input, styles.flex1]} placeholder="Nom" />
          </View>
          <TextInput style={styles.input} placeholder="Âge" keyboardType="numeric" />
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.flex1]} placeholder="Taille (cm)" keyboardType="numeric" />
            <TextInput style={[styles.input, styles.flex1]} placeholder="Poids (kg)" keyboardType="numeric" />
          </View>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Vos données de santé sont privées et utilisées uniquement pour calibrer votre compteur de pas.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          navigation.navigate('LocationPermission');
        }}>
          <Text style={styles.buttonText}>Valider mes infos</Text>
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
    backgroundColor: '#36e278',
    width: 32,
  },
  heroSection: {
    marginBottom: 32,
  },
  step: {
    backgroundColor: 'rgba(54, 226, 120, 0.2)',
    color: '#36e278',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111714',
  },
  highlight: {
    color: '#36e278',
  },
  subtitle: {
    fontSize: 18,
    color: '#648771',
    marginTop: 8,
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 24,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dce5df',
  },
  flex1: {
    flex: 1,
  },
  infoBox: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoText: {
    color: '#648771',
    fontSize: 12,
    textAlign: 'center',
  },
  button: {
    height: 56,
    backgroundColor: '#36e278',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#111714',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalInformationScreen;