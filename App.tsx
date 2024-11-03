import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Login from './src/screens/Login'

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text>App</Text>
        <Login/>
      </View>
      </SafeAreaView>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  main: {
    flex: 1, 
  },
  container: {
    flex:1, 
    justifyContent: 'center', 
    alignItems:'center',
    padding: 30 
  },
})