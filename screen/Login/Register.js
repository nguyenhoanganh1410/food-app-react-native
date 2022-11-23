import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import fastfood from "../../images/fastfood.png";

export default function Register({ navigation }) {
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
            ></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Password"
            ></TextInput>
          </View>

          {/* Password */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Password"
            ></TextInput>
          </View>

          {/* btn login */}
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}>
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
