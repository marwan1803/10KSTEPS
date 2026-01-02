import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    navigation.navigate('CreateAccount');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn6B9uORK6Kc2Y8508H7W4_nvtytZINYNvVR6jZapZ5AO4Etnk_vKQXzIdZAGsJQkoDCLcFakcyPYxOPRJOk0gUYxIWg8vYT5u2I-hmp54IbnR0IueHPwviTEyLVevxiW-PS3GC3HgQ6PiXT98NGdIOmc4Y9zdNBVHlxBIMezClvKn_V2kFAcsFpaaLlBf2agW6NXaXT0hy_fMcevSNndAGr_kgxBo5JzyGiQtZjpe6Kz1ZrWD4ufza-di5QT7R6_IsFjR45e76E0' }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>10 000 Steps</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.title}>
            Atteignez <Text style={styles.highlight}>10 000 pas</Text>,{'\n'} simplement.
          </Text>
          <Text style={styles.subtitle}>
            Transformez vos trajets quotidiens en une aventure ludique. Plus besoin de sport intense, marchez juste un peu plus, chaque jour.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Commencer l'aventure</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    fontSize: 24,
    color: '#fff',
  },
  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  highlight: {
    color: '#39E079',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    maxWidth: 320,
    fontFamily: 'PlusJakartaSans-Medium',
  },
  button: {
    backgroundColor: '#39E079',
    paddingVertical: 18,
    borderRadius: 999,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#39E079',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: { height: 5, width: 0 },
  },
  buttonText: {
    color: '#122017',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'PlusJakartaSans-Bold',
  },
});

export default WelcomeScreen;