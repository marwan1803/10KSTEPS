import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const CreateAccountScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const getPasswordStrength = () => {
    if (password.length >= 8) return 'Strong';
    if (password.length >= 4) return 'Medium';
    if (password.length > 0) return 'Weak';
    return '';
  };

  const strength = getPasswordStrength();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'} Back</Text>
          </TouchableOpacity>
          <Text style={styles.stepIndicator}>Step 1 of 3</Text>
        </View>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Let's get moving!</Text>
          <Text style={styles.subtitle}>
            Join the challenge and track your 10,000 steps daily. Your journey starts here.
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Choose a username" />
          <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
          <TextInput
            style={styles.input}
            placeholder="Create a secure password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {strength && (
            <View style={styles.strengthIndicator}>
              <View style={[styles.strengthBar, { backgroundColor: strength === 'Strong' ? '#38e079' : strength === 'Medium' ? '#facc15' : '#ef4444' }]} />
              <Text style={styles.strengthText}>{strength}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          navigation.navigate('PersonalInformation');
        }}>
          <Text style={styles.buttonText}>Create my account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.footerText}>
            Already a member? <Text style={styles.link}>Log in</Text>
          </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    fontSize: 16,
    color: '#3b82f6',
  },
  stepIndicator: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#38e079',
    textTransform: 'uppercase',
  },
  heroSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111714',
  },
  subtitle: {
    fontSize: 16,
    color: '#648771',
    marginTop: 8,
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  input: {
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dce5df',
  },
  strengthIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  strengthBar: {
    height: 4,
    width: 40,
    borderRadius: 2,
  },
  strengthText: {
    fontSize: 12,
    color: '#648771',
  },
  button: {
    height: 56,
    backgroundColor: '#38e079',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#111714',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#111714',
  },
  link: {
    color: '#3b82f6',
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;