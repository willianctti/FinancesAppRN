import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import firebaseConfig from './src/services/firebaseConnection'

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#131313" barStyle="light-content"/>
    </View>
  )
}