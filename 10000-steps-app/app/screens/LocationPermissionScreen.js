import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const LocationPermissionScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG4zK-roBS_xtZ8gX0VZ5jMv3O8_dHEjUOiKHQ_XqxdpJvgqZ6tqS8tdKg16AE7fS_EQ4o_9-0A6Qv9ngFh7O0VHU0r--B1yfoyVUf8XcNqc9Kwp-1rLmLBq5OXBsMsvk9Rm40Ci0nh8uzmhaoFOikO_FyY4DQfb5hwqq2VZXpAlNz6seTfqjK3gFacyui6ByNidRaTNftvRwLCzLcYogFAExTMlQx6rJAdmcuKbfY_k-vhS44rdiIUIW6pKec0z_WfhSvnJLkM3o' }}
        style={styles.mapBackground}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Où allons-nous aujourd'hui ?</Text>
        <Text style={styles.subtitle}>
          Pour vous proposer des itinéraires de marche optimisés et vous aider à atteindre vos 10 000 pas sans y penser, nous avons besoin de connaître votre position.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          navigation.navigate('Confirmation');
        }}>
          <Text style={styles.buttonText}>Autoriser la localisation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
          <Text style={styles.skipText}>Plus tard</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f7',
  },
  mapBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '40%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 24,
    paddingBottom: 48,
    backgroundColor: '#f6f8f7',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: '60%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 999,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#1e293b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#64748b',
    fontSize: 16,
  },
});

export default LocationPermissionScreen;