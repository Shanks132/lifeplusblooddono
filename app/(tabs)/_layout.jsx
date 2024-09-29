import { View, Text } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'


const TabsLayout = () => {
  return (
   <>
    <Tabs>
      <Tabs.Screen name="home"/>
      <Tabs.Screen name="settings"/>
      <Tabs.Screen name="searchDonors"/>
      <Tabs.Screen name="donate"/>
    </Tabs>
    
   </>
  )
}

export default TabsLayout