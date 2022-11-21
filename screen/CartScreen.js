import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import coffe from "../images/c-removebg-preview.png";
import Appstyles from "./CartStyle.scss";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Stack, Button } from "@react-native-material/core";

export default function CartScreen() {
  const [quatity, setQuatity] = useState("1");
  const handlePluss = () => {
    const newQuatity = +quatity + 1;
    setQuatity(newQuatity.toString());
  };
  const handleTru = () => {
    const newQuatity = +quatity - 1;
    if (newQuatity > 0) {
      setQuatity(newQuatity.toString());
    }
  };
  return (
    <View style={styles.container}>
      <View style={Appstyles.top}>
        <View style={Appstyles.top_icons}>
          <TouchableOpacity style={Appstyles.top_icon}>
            <Icon name="home" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={Appstyles.top_icon}>
            <Icon name="heart" size={24} />
          </TouchableOpacity>
        </View>
        <Image style={styles.tinyLogo} source={coffe} />
      </View>
      <View style={Appstyles.bottom}>
        <Text style={{ fontSize: 32, color: "#444444", fontWeight: "700" }}>
          Poited Plants
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="star" size={24} color="green" />
            <Text style={{ marginLeft: 8 }}>4.0 Rating</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="comment" size={24} color="green" />
            <Text style={{ marginLeft: 8 }}>20 Comments</Text>
          </View>
        </View>

        <View style={Appstyles.content}>
          <View style={Appstyles.option}>
            <TouchableOpacity
              style={Appstyles.option_button}
              onPress={() => handleTru()}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} value={quatity} />
            <TouchableOpacity
              style={Appstyles.option_button}
              onPress={() => handlePluss()}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={Appstyles.price}>{`$${20 * +quatity}`}</Text>
        </View>

        <View style={Appstyles.about}>
          <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: 12 }}>
            About
          </Text>
          <Text style={Appstyles.text}>
            Has by default a border at the bottom of its view. This border has
            its padding set by the background image provided by the system, and
            it cannot be changed. Solutions to avoid this are to either not set
            height explicitly, in which case the system will take care of
            displaying the border in the correct position, or to not display the
            border by setting underlineColorAndroid to transparent.
          </Text>
        </View>
        <Button title="Buy Now" style={Appstyles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  input: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 12,
  },
});
