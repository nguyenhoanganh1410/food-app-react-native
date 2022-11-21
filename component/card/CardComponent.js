import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import pizza from "../../images/purepng.com-pizzafood-pizza-941524644327twewe.png";
import Appstyles from "./CaterogyStyle.scss";

export default function CardComponent({ item, navigation }) {
  const handleOpenDetails = () => {
    // console.log(navigation);
    navigation.navigate("AddToCart", {
      item,
    });
  };

  console.log(item.image);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOpenDetails()}
    >
      <View style={{ flex: 2 }}>
        <Image style={styles.tinyLogo} source={{ uri: item.image }} />
      </View>
      <View
        style={{
          flex: 1,

          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: "space-around",
        }}
      >
        {item.name.length > 12 ? (
          <Text style={styles.name}>{item.name.slice(0, 20) + "..."}</Text>
        ) : (
          <Text style={styles.name}>{item.name}</Text>
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>3km</Text>
          <Text style={styles.text}>Free Delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 200,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 6,
    marginRight: 24,
    // paddingHorizontal: 12,
    // paddingVertical: 12,
    //  marginBottom: 24,
    borderRadius: 8,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    textTransform: "capitalize",
    fontSize: 11,
    color: "#7F8487",
  },
  name: {
    textTransform: "capitalize",
    // marginVertical: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});
