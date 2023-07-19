import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={{backgroundColor: 'yellow', width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}
        onPress={handleSignOut}
        >
            
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})