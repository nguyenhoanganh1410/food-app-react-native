import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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
          <Text style={{ fontSize: 30, marginBottom: 10, marginLeft: 18 }}>
            Sign Up
          </Text>
        </View>

        {/* input info */}
        <View style={styles.body}>
          {/* Name */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Name"
            ></TextInput>
          </View>

          {/* Country */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View>

          {/* Country */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View>

          {/* Country */}
          <View style={styles.viewInput}>
            <TextInput
              style={{ paddingLeft: 10 }}
              placeholder="Country"
            ></TextInput>
          </View>

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
              <Text>Login</Text>
            </TouchableOpacity>
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
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginBottom: 10,
  },
  headerBack: {
    marginLeft: 18,
    height: 40,
    width: 40,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  body: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
  },

  viewInput: {
    height: 50,
    marginBottom: 15,
    backgroundColor: "gray",
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
  },
});
