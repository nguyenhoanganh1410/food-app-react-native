import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

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
  const [pressOn, SetPresson] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        SetPresson(!pressOn);
        console.log("item", item);
      }}>
      <View
        style={[
          pressOn
            ? [{ height: 230 }, styles.Item]
            : [{ height: 100 }, styles.Item],
        ]}>
        <View style={styles.viewBody}>
          <Image
            style={{ height: 70, width: 70, borderRadius: 10 }}
            source={item.img}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}>
            <View
              style={{
                marginLeft: -40,
                flexDirection: "column",
                justifyContent: "center",
              }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              </View>

              <Text style={{ marginTop: 5, color: "gray", fontSize: 13 }}>
                {item.time}
              </Text>
            </View>
          </View>

          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            $ {item.price}
          </Text>
        </View>
        {pressOn ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: "row", marginLeft: 10 }}>
                <Ionicons name="location" size={15} color={"red"} />
                <Text style={{ color: "gray", fontSize: 12 }}>10 km</Text>
              </View>
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <Text style={{ color: "red", fontSize: 12 }}> $ 10$</Text>
              </View>
            </View>
            <View style={styles.viewPressOn}>
              <View style={styles.viewButton}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
                  Repeat order
                </Text>
              </View>
              <Text style={{ fontWeight: "", fontSize: 15, marginTop: 10 }}>
                More details{" "}
              </Text>
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Item: {
    flex: 1,
    flexDirection: "column",
    width: 350,
    //height: 100,
    backgroundColor: "white",
    justifyContent: "space-around",
    //alignItems: "center",
    padding: 0,
    borderWidth: 0,
    borderColor: "#E3FAF4",
    borderRadius: 15,
    margin: 5,
  },
  viewBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  viewPressOn: {
    flexDirection: "column",
    //justifyContent: "center",
    alignItems: "center",
  },
  viewButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#ffd658",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
