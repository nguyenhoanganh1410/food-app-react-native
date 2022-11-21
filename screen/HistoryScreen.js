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

import cake1 from "../images/cake1.jpg";
import cake2 from "../images/cake2.jpg";
import cake3 from "../images/cake3.png";
import cake4 from "../images/cake4.jpg";
import cake5 from "../images/cake5.jpg";
import cake6 from "../images/cake6.jpg";

export default function StartScreen() {
  var data = [
    { img: cake1, title: " Samosas", price: 20, time: "yesterday" },
    { img: cake2, title: " Rogan Josh", price: 30, time: "2 days ago" },
    { img: cake3, title: " Tikka masala", price: 25, time: "2 days ago" },
    { img: cake4, title: " Tandoori", price: 10, time: "3 days ago" },
    { img: cake5, title: " Goulash", price: 15, time: "3 days ago" },
    { img: cake6, title: " Goul Tandeji", price: 24, time: "3 days ago" },
    { img: cake6, title: " Goulash Tandeji", price: 20, time: "3 days ago" },
    { img: cake6, title: " Goulash Tandeji", price: 28, time: "3 days ago" },
    { img: cake6, title: " Goulash Tandeji", price: 26, time: "3 days ago" },
  ];
  // const [panel, setPanle] = useState(ArrayImg[0]);
  const [index, setIndex] = useState(1);
  const renderItem = ({ item }) => <Items item={item} />;

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
        My History
      </Text>
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
    backgroundColor: "#F8F8F9",
  },
  viewBody: {
    backgroundColor: "#F8F8F9",
    height: 700,
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
