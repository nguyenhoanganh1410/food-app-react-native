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
import Items from "../component/ItemHistory";

import tree from "../images/organicfood.png";
import logo from "../images/logo.png";
import shipper from "../images/shipper.png";
import eatfood from "../images/eatfood.png";

export default function StartScreen() {
  var data = [
    { img: tree, title: " Samosas", price: 20, time: "yesterday" },
    { img: tree, title: " Rogan Josh", price: 30, time: "2 days ago" },
    { img: tree, title: " Tikka masala", price: 25, time: "2 days ago" },
    { img: tree, title: " Tandoori", price: 10, time: "3 days ago" },
    { img: tree, title: " Goulash", price: 15, time: "3 days ago" },
  ];
  // const [panel, setPanle] = useState(ArrayImg[0]);
  const [index, setIndex] = useState(1);
  const renderItem = ({ item }) => <Items item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.viewBody}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
  },
  viewBody: {
    backgroundColor: "#E3FAF4",
    height: 500,
    //justifyContent: "center",
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
