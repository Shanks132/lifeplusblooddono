import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BloodDonationScreen = () => {
  return (
    
    <View style={styles.container}>
      
        
      
      <Text style={styles.header}>USER ID</Text>

      <View style={styles.content}>
        <Text style={styles.quote}>
          Your blood is the lifeline someone desperately needs. One donation can
          save multiple lives—be the reason someone smiles, survives, and thrives
          today.
        </Text>

        {false && <View style={styles.dotIndicator}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button2} onPress={()=>{router.push("/donate")}}>
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=>{router.push("/searchDonors")}}>
          <Text style={styles.buttonText}>Request Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{router.push("/searchDonors")}}>
          <Text style={styles.buttonText}>Emergency</Text>
        </TouchableOpacity>
      </View>
      </View>

      {false && <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          {/* Add your home icon here */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* Add your settings icon here */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* Add your notifications icon here */}
        </TouchableOpacity>
        <TouchableOpacity>
          {/* Add your location icon here */}
        </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D20202',
  },
  buttonView:{
    backgroundColor:"#FFDFDF",
    padding:40,
    gap:15
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    padding: 20,
  },
  quote: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor:"#FFDFDF",
    borderColor:"#FFDFDF",
    borderRadius:10,
    padding:15
  },
  dotIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#FEB735',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  button1: {
    backgroundColor: '#29A744',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  button2: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
});

export default BloodDonationScreen;