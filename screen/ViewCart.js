import { StatusBar } from "expo-status-bar";
import {
  AppBar,
  HStack,
  IconButton,
  Badge,
  Button,
} from "@react-native-material/core";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import CardItem from "../component/card/card/CardItem";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Appstyles from "./CartStyle.scss";
import Contex from "../store/Context";
import { useContext, useEffect, useState } from "react";
// import RNTextArea from "@freakycoder/react-native-text-area";
export default function ViewCart({ navigation }) {
  const { state, depatch } = useContext(Contex);
  const { cart } = state;

  const [total, setTotal] = useState(0);

  const handlePress = () => {
    navigation.navigate("Delivery");
  };
  //console.log(cart);
  useEffect(() => {
    //total price
    const sum = cart.reduce((total, val) => {
      return total + +val.price * +val.quatity;
    }, 0);

    setTotal(sum);
  }, [cart]);
  return (
    <View style={styles.container}>
      <View
        style={{
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          marginBottom: 6,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <TouchableOpacity
          style={Appstyles.top_icon}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="home" size={24} />
        </TouchableOpacity>
        <Text style={{ marginLeft: 6, fontSize: 18, fontWeight: "500" }}>
          Cart
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {cart.map((val) => {
          return <CardItem item={val} key={Math.random()} />;
        })}
        {/* <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem /> */}
      </ScrollView>

      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>Total:</Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 4,
                marginBottom: 4,
                color: "red",
              }}
            >
              Without discount:
            </Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "red" }}>
            {" "}
            {"$" + total}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
          <Button
            style={{
              paddingVertical: 8,
              backgroundColor: "#FFD658",
              color: "white",
            }}
            // variant="outlined"
            title="Pay"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F9",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  scrollView: {
    // height: "40%",
  },
});
