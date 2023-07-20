import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { firebase } from "../firebase";
import DropDownPicker from "react-native-dropdown-picker";

const DetailScreen = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [decreption, setDecreption] = useState("");
  const [location, setLocation] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Cod", value: "cod" },
    { label: "CK", value: "Chuyển khoản" },
    { label: "GDTT", value: "Giao dịch trực tiếp" },
    { label: "GDTG", value: "Giao dịch trung gian" },
  ]);

  const handleAdd = () => {
    firebase
      .firestore()
      .collection("books")
      .add({
        title,
        price,
        decreption,
        location,
        value,
      })
      .then(() => {
        setTitle("");
        setPrice("");
        setDecreption("");
        setLocation("");
        setValue([])
        alert("Add Success");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleTouch = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.viewTitle}>
          <Text style={styles.viewTextTitle}>Bring Mom money, don't bring Mom worries</Text>
        </View>
        <View style={styles.viewForm}>
          <View style={styles.viewTextInputOutline}>
            <View style={styles.viewTextInputInline}>
              <TextInput
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
                multiline
              />
            </View>
            <View style={styles.viewTextInputInline}>
              <TextInput
                placeholder="Price"
                value={price}
                onChangeText={(text) => setPrice(text)}
                multiline
                keyboardType="numeric"
              />
            </View>

            <View style={styles.viewTextInputInline}>
              <TextInput
                placeholder="Location"
                value={location}
                onChangeText={(text) => setLocation(text)}
                multiline
              />
            </View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              multiple={true}
              mode="BADGE"
              style={styles.dropDown}
              containerStyle={styles.dropDownContainer}
              containerProps={{}}
              badgeDotColors={[
                "#e76f51",
                "#00b4d8",
                "#e9c46a",
                "#e76f51",
                "#8ac926",
                "#00b4d8",
                "#e9c46a",
              ]}
            />
            <View style={styles.viewTextInputInlineDecreption}>
              <TextInput
                placeholder="Decreption"
                value={decreption}
                onChangeText={(text) => setDecreption(text)}
                multiline
              />
            </View>
          </View>
          <View style={styles.viewButtonOutline}>
            <TouchableOpacity
              style={styles.viewButtonInline}
              onPress={handleAdd}
            >
              <Text>Add Books</Text>
              {console.log(value)}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6C3428",
  },
  viewForm: {
    backgroundColor: "#98EECC",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderRadius: 10,
    width: 350,
    marginTop: 20,
    height: 600,
    shadowColor: "#171717",
    shadowOffset: { width: -15, height: 15 },
    shadowOpacity: 0.2,
    shadowRadius: 0.1,
  },
  viewTitle: {
    
  },
  viewTextTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  viewTextInputOutline: {
  },
  viewTextInputInline: {
    margin: 10,
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "#D0F5BE",
    width: 250,
    height: 50,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewTextInputInlineDecreption: {
    margin: 10,
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "#D0F5BE",
    width: 250,
    height: 110,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  dropDown:{
    margin: 10,
    borderColor: "black",
    borderWidth: 0.5,
    backgroundColor: "#D0F5BE",
    width: 250,
    height: 50,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  dropDownContainer:{
    width: 270,
  },
  viewButtonOutline: {
    marginTop: 20,
    backgroundColor: "#FBFFDC",
    width: 144,
    height: 42,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  viewButtonInline: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
