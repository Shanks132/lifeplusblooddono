
import React from 'react'
import {  Stack } from 'expo-router'


const AuthLayout = () => {  
  return (
  <Stack>
    <Stack.Screen name="sign-in"/>
    <Stack.Screen name="sign-up"/>
  </Stack>
    // <View>
    //   <Text>Auth Layout</Text>
    //   <Slot/>
    // </View>
  )
}

export default AuthLayout