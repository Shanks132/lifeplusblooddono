import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.plusLifeText}>Plus Life</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  plusLifeText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FF2773', // Replace with your desired color
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowRadius: 5,
  },
});

export default WelcomeMessage;