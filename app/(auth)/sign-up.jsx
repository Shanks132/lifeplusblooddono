import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import WelcomeMessage from '../../components/WelcomeMessage';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha"
import { firebase, firebaseConfig } from "../firebase/firebaseConfig"

function PlusLifeLogin() {
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = ()=>{
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider.verifyPhoneNumber(phoneNumber,recaptchaVerifier.current)
    .then(setVerificationId).catch((error)=>{alert("error while verifying phone number"+error)})
    setPhoneNumber('');
  } 
  const confirmCode = () =>{
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code)
      firebase.auth().signInWithCredential(credential)
      .then(()=>{
        setCode('')
      })
      .catch((error)=>{alert("error during otp verification ")})
      Alert.alert("Login Successful");


  }

  return (
    <View style={styles.container}>
      <WelcomeMessage/>
      
      <Link href={"/home"}>Go To Home Page</Link> 
      <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig ={firebaseConfig}
      />
      <TextInput
      placeholder='Phone number with country code'
      onChangeText={setPhoneNumber}
      keyboardType='phone-pad'
      autoCompleteType='tel'
      style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={sendVerification}>
          <Text style={styles.buttonText}>
            Send Verification
          </Text>

      </TouchableOpacity>

      <TextInput
      placeholder='Confirm Code'
      onChangeText={setCode}
      keyboardType='number-pad'
      autoCompleteType='tel'
      style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={confirmCode}>
          <Text style={styles.buttonText}>
            Confirm Verification
          </Text>

      </TouchableOpacity>
    </View>
  );
}


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {

    width:300,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    fontSize:22,
  },
  button: {
    flex:0.1,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
    height:0,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    
  },
  message: {
    marginTop: 10,
    textAlign: 'center',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
  },
};

export default PlusLifeLogin;