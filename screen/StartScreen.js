import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import tree from "../images/organicfood.png";
import logo from "../images/logo.png";
import shipper from "../images/shipper.png";
import eatfood from "../images/eatfood.png";

export default function StartScreen({ navigation }) {
  var ArrayImg = [
    { img: tree, title: " Select Food Item" },
    { img: shipper, title: "Hot Delivery to Home" },
    { img: eatfood, title: "Receive the Great Food" },
  ];
  const [panel, setPanle] = useState(ArrayImg[0]);
  const [index, setIndex] = useState(1);

  function handleNext() {
    if (index < ArrayImg.length) {
      setPanle(ArrayImg[index]);
      if (index == 0) setIndex(index + 2);
      setIndex(index + 1);

      console.log(index);
    } else {
      navigation.navigate("HistoryScreen");
      // setIndex(0);
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Image style={{ height: 100, width: 100 }} source={logo} />
      </View>
      <View>
        <Image
          style={{ height: 350, width: 350, borderRadius: 20 }}
          source={panel.img}
        />
      </View>
      <View>
        <View style={styles.viewBot}>
          <View style={{ width: 300, height: 50 }}>
            <Text
              style={{
                fontSize: 25,

                fontWeight: "bold",
                textAlign: "center",
              }}>
              {panel.title}
            </Text>
          </View>
          <View
            style={{
              width: 300,
              alignItems: "center",
              alignContent: "center",
            }}>
            <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>
              In our application you can find the fastiest food and do a correct
              choose !
            </Text>
          </View>

          <TouchableOpacity style={styles.viewButton} onPress={handleNext}>
            <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewSwitch}>
        <View
          style={[
            {
              width: 7,
              height: 7,
              borderRadius: 50,
              marginLeft: 10,
            },
            index == 1
              ? { backgroundColor: "gray" }
              : { backgroundColor: "#CCCCCC" },
          ]}></View>
        <View
          style={[
            {
              width: 7,
              height: 7,
              borderRadius: 50,
              marginLeft: 10,
            },
            index == 2
              ? { backgroundColor: "gray" }
              : { backgroundColor: "#CCCCCC" },
          ]}></View>
        <View
          style={[
            {
              width: 7,
              height: 7,
              borderRadius: 50,
              marginLeft: 10,
            },
            index == 3
              ? { backgroundColor: "gray" }
              : { backgroundColor: "#CCCCCC" },
          ]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    /// justifyContent: "center",

    justifyContent: "flex-end",
  },
  viewBot: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  viewButton: {
    marginTop: 20,
    width: 250,
    height: 50,
    backgroundColor: "#ffd658",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  viewSwitch: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
});
