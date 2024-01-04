import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import firebaseConfig from './src/services/firebaseConnection'
import 'react-native-gesture-handler'
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contents/auth'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
      <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}