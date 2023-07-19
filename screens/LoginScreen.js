import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if(user) {
  //       navigation.replace("Home")
  //     }
  //   })
  // })

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with: ' + user.email)
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      if(user) {
        navigation.replace("Home")
      }
      console.log('Logged in with:', user.email)
    })
    .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.containter} behavior='padding'>
      <StatusBar hidden />
      <View style={styles.titleView}>
        <Text style={styles.textMiniBooks}>Mini Books</Text>
      </View>
      <View style={styles.formLoginView}>
        <View style={styles.formView}>
          <TextInput
            placeholder='Email'
            value={email}
            style={styles.text}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.formView}>
          <TextInput
            placeholder='Password'
            value={password}
            secureTextEntry={true}
            style={styles.text}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.buttonOutline}>
          <TouchableOpacity onPress={handleSignUp} style={styles.buttonInline}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonOutline}>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonInline}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleView: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textMiniBooks: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#AAC8A7'
  },
  formLoginView: {
    marginTop: 20
  },
  formView: {
    backgroundColor: '#C3EDC0',
    marginTop: 10,
    width: 300,
    height: 40,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  buttonView: {
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 12,
    marginRight: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 8,
    elevation: 10,
    shadowColor: 'black',
  },
  textButton: {
    color: '#AAC8A7'
  },
  buttonInline: {
    width: '100%',
    alignItems: 'center'
  }
})