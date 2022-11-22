import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import coffe from "../images/ham.png";
import Appstyles from "./CartStyle.scss";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useContext, useEffect, useState } from "react";
import { Stack, Button } from "@react-native-material/core";
import Contex from "../store/Context";
import { SetCart } from "../store/Actions";

export default function CartScreen({ route, navigation }) {
  const { state, depatch } = useContext(Contex);
  const { cart } = state;

  console.log(cart);

  
  // console.log(route.params.item);
  const { item } = route.params;
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

  const handleAddToCart = () => {
    //loc phan tu trung nhau
    let check = false;
    const newCart = [...cart];

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === item.id) {
        newCart[i].quatity = +newCart[i].quatity + +quatity;
        console.log(newCart[i].quatity);
        check = true;
        break;
      }
    }
    console.log(newCart);
    if (check === true) {
      depatch(SetCart(newCart));
    } else {
      depatch(SetCart([...cart, { ...item, quatity }]));
    }

    //navogation cart
    navigation.navigate("ViewCartScreen");
  };

 

  return (
    <View style={styles.container}>
      <View style={Appstyles.top}>
        <View style={Appstyles.top_icons}>
          <TouchableOpacity
            style={Appstyles.top_icon}
            onPress={() => navigation.navigate("Home")}
          >
            <Icon name="home" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={Appstyles.top_icon}>
            <Icon name="heart" size={24} />
          </TouchableOpacity>
        </View>
        <Image style={styles.tinyLogo} source={{ uri: item.image }} />
      </View>
      <View style={Appstyles.bottom}>
        <Text
          style={{
            fontSize: 32,
            color: "#444444",
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {item?.name}
        </Text>
        <View style={{ flexDirection: "row", marginVertical: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="star" size={24} color="#FE5F55" />
            <Text style={{ marginLeft: 8 }}>4.0 Rating</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Icon name="comment" size={22} color="#FE5F55" />
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
          <Text style={Appstyles.price}>{`$${item.price * +quatity}`}</Text>
        </View>

        <View style={Appstyles.about}>
          <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: 12 }}>
            About
          </Text>
          <Text style={Appstyles.text}>
            Has by default a border at the bottom of its view. This border has
            its padding set by the background image provided by the system, and
          </Text>
        </View>
        <Button
          title="Buy Now"
          style={Appstyles.button}
          onPress={() => handleAddToCart()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  input: {
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 12,
  },
});
