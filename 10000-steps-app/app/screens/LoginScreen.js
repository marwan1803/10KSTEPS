import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Connexion</Text>
          <View style={{ width: 48 }} />
        </View>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
          <Text style={styles.mainTitle}>Bienvenue !</Text>
          <Text style={styles.subtitle}>Prêt à bouger ? Connectez-vous pour continuer.</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Email ou nom d'utilisateur" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Votre mot de passe" secureTextEntry />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Ou continuer avec</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text>🍎</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text>G</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.footerText}>
            Vous n'avez pas de compte ? <Text style={styles.link}>Créer un compte</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    fontSize: 24,
    color: '#111714',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111714',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#36e278',
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111714',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#648771',
    textAlign: 'center',
  },
  form: {
    gap: 16,
    marginBottom: 24,
  },
  input: {
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 999,
    paddingHorizontal: 24,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#dce5df',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#648771',
    fontSize: 14,
  },
  button: {
    height: 56,
    backgroundColor: '#36e278',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#dce5df',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#648771',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dce5df',
  },
  footer: {
    marginTop: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#648771',
  },
  link: {
    color: '#36e278',
    fontWeight: 'bold',
  },
});

export default LoginScreen;