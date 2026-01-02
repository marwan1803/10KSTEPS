import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

const ChooseActivityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Quelle aventure aujourd'hui ?</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Sortie Classique</Text>
          <Text style={styles.activityDescription}>
            Un itinéraire simple et direct pour marcher sans réfléchir.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>C'est parti</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>Sur Mesure</Text>
          <Text style={styles.activityDescription}>
            Optimisé selon votre agenda et vos lieux favoris.
          </Text>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Configurer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f7',
  },
  header: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 24,
    marginBottom: 16,
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  activityDescription: {
    fontSize: 16,
    color: '#64748b',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#39E079',
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#1e293b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#39E079',
  },
  secondaryButtonText: {
    color: '#39E079',
  },
});

export default ChooseActivityScreen;