import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import pizza from "../../images/purepng.com-pizzafood-pizza-941524644327twewe.png";
import Appstyles from "./CaterogyStyle.scss";

export default function CardComponent({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ flex: 1.5 }}>
        <Image style={styles.tinyLogo} source={pizza} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>Pizza hub</Text>
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
    width: 180,
    height: 180,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 6,
    marginRight: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 24,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 11,
    color: "#7F8487",
  },
  name: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});
