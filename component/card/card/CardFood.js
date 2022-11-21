import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import pizza from "../../../images/purepng.com-pizzafood-pizza-941524644327twewe.png";
import Appstyles from "../CaterogyStyle.scss";

export default function CardFood({ item, navigation }) {
  const handleOpenDetail = () => {
    navigation.navigate("AddToCart", {
      item,
    });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      key={item.id + Math.random()}
      onPress={() => handleOpenDetail()}
    >
      <View style={{ flex: 1.5 }}>
        <Image style={styles.tinyLogo} source={{ uri: item.image }} />
      </View>
      <View
        style={{
          flex: 3,
          marginLeft: 6,
          justifyContent: "space-between",
          paddingBottom: 6,
          paddingVertical: 12,
          paddingHorizontal: 12,
        }}
      >
        <View>
          {item.name.length > 12 ? (
            <Text style={styles.name}>{item.name.slice(0, 20) + "..."}</Text>
          ) : (
            <Text style={styles.name}>{item.name}</Text>
          )}
          <Text style={styles.title}>lorem food</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.price}>{"$" + item.price.toFixed(2)}</Text>
          <Text style={styles.text}>Free Delivery</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 6,
    marginRight: 24,
    // paddingHorizontal: 12,
    // paddingVertical: 12,
    marginBottom: 24,
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    color: "#7F8487",
    marginVertical: 8,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  price: {
    color: "#fe5f55",
    fontSize: 14,
    fontWeight: "500",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 14,
    color: "#7F8487",
  },
  name: {
    textTransform: "capitalize",

    fontSize: 18,
    fontWeight: "600",
  },
});
