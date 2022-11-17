import React, { useEffect, useState } from "react";

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
  TextInput,
} from "react-native";
export default function Items({ item }) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("item", item);
      }}>
      <View style={styles.Item}>
        <Image
          style={{ height: 110, width: 100, borderRadius: 10 }}
          source={item.img}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
            }}>
            <View>
              <Text style={{ marginRight: 10, fontWeight: "bold" }}>
                {item.title}
              </Text>
            </View>

            <Text style={{ fontSize: 15, color: "green", fontWeight: "bold" }}>
              $ {item.price}
            </Text>
          </View>
          {/* <Ionicons name="cart-outline" size={25} color={"green"} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection: "column",
    backgroundColor: "#E3FAF4",
  },
  viewInFo: {
    margin: 15,
    //  flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  styeInput: {
    width: 150,
    height: 50,
    color: "white",
  },
  viewSearch: {
    width: "80%",
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginLeft: 40,
    marginBottom: 30,
    marginTop: 20,
  },
  viewBody: {
    backgroundColor: "#E3FAF4",
    height: 500,
  },
  Item: {
    //flex: 1 / 2,
    flexDirection: "column",
    width: 180,
    height: 230,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 15,
    margin: 10,
  },
});
