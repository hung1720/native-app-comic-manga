import { StyleSheet, TextInput, TouchableOpacity, View, Text, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
import { firebase } from '../firebase'

const DetailScreen = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [decreption, setDecreption] = useState('')
  const [location, setLocation] = useState('')
  const [transaction, setTransaction] = useState('')

  const handleAdd = () => {
    firebase.firestore()
      .collection('books')
      .add({
        title, price, decreption, location, transaction
      })
      .then(() => {
        setTitle('')
        setPrice('')
        setDecreption('')
        setLocation('')
        setTransaction('')
        alert('Add Success')
      })
      .catch((error) => {
        alert(error)
      })
  }

  const handleTouch = () => {
    Keyboard.dismiss()
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.viewTitle}>
          <Text style={styles.viewTextTitle}>Hãy thêm cuốn truyện của bạn</Text>
        </View>
        <View style={styles.viewTextInputOutline}>
          <View style={styles.viewTextInputInline}>
            <TextInput placeholder='Title' value={title} onChangeText={(text) => setTitle(text)} multiline />
          </View>
          <View style={styles.viewTextInputInline}>
            <TextInput placeholder='Price' value={price} onChangeText={(text) => setPrice(text)} multiline keyboardType='numeric' />
          </View>
          <View style={styles.viewTextInputInline}>
            <TextInput placeholder='Decreption' value={decreption} onChangeText={(text) => setDecreption(text)} multiline />
          </View>
          <View style={styles.viewTextInputInline}>
            <TextInput placeholder='Location' value={location} onChangeText={(text) => setLocation(text)} multiline />
          </View>
          <View style={styles.viewTextInputInline}>
            <TextInput placeholder='Transaction' value={transaction} onChangeText={(text) => setTransaction(text)} multiline />
          </View>
        </View>
        <View style={styles.viewButtonOutline}>
          <TouchableOpacity onPress={handleAdd}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDFFBB'
  },
  viewTitle: {

  },
  viewTextTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  },
  viewTextInputOutline: {
    marginTop: 30
  },
  viewTextInputInline: {
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: '#C7E9B0',
    width: 250,
    height: 65,
    borderRadius: 20,
    padding: 10
  },
  viewButtonOutline: {
    marginTop: 20,
    backgroundColor: 'yellow',
    width: 70,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})