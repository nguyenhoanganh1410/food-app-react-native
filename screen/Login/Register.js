import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import fastfood from "../../images/fastfood.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { firebaseConfig } from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import Contex from "../../store/Context";
import { SetUserLogin } from "../../store/Actions";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const { state, depatch } = useContext(Contex);
  const { userLogin } = state;

  const register = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(regex)) {
      Alert.alert("Email invalidate");
      return;
    }
    //check data
    if (name.length === 0) {
      Alert.alert("Name is not empty");
      return;
    } else if (password !== repassword) {
      Alert.alert("The password must be same");
      return;
    }

    //firebase in here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
          console.log(err)
        );
        depatch(SetUserLogin(userCredential.user.providerData[0]));

        Alert.alert("register sucessfully!!");
        navigation.navigate("Home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
        // ..
      });
  };
  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* btn back */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* <View style={styles.topView}>
          <Image
            source={fastfood}
            resizeMode="center"
            style={styles.image}
          ></Image>
        </View> */}
        {/* input info */}
        <View style={styles.body}>
          <Text
            style={{
              fontSize: 34,
              marginBottom: 40,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
          {/* Name */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Name"
              onChangeText={(text) => setName(text)}
            ></TextInput>
          </View>

          {/* Country */}
          {/* <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View>

          {/* Country */}
          {/* <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View> */}

          {/* Country */}
          {/* <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View> */}

          {/* Email */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(text) => setRepassword(text)}
            ></TextInput>
          </View>

          {/* btn login */}
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn} onPress={() => register()}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              textAlign: "center",
              marginTop: 6,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Do you have a account?</Text>
            <Text style={{ marginLeft: 8 }}>Login Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topView: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    //  backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "space-evenly",
  },
  header: {
    justifyContent: "center",
    height: 50,
    width: "100%",
    // backgroundColor: "red",
    // marginBottom: 10,
  },
  headerBack: {
    marginLeft: 18,
    marginTop: 100,
    height: 40,
    width: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#FFD658",
  },

  body: {
    // flex: 1,
    marginTop: 40,
    width: "90%",
    marginTop: 100,
    // justifyContent: "center",
  },

  viewInput: {
    height: 56,
    paddingVertical: 14,
    marginBottom: 30,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    borderRadius: 5,
  },

  btnView: {
    justifyContent: "center",
  },

  btn: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#FFD658",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
