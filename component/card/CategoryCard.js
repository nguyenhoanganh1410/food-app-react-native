import { StatusBar } from "expo-status-bar";
import { StyleSheet, 
    Text, View, Image, TouchableOpacity } from "react-native";
import pizza from "../../images/purepng.com-pizzafood-pizza-941524644327twewe.png";
import Appstyles from "./CaterogyStyle.scss";

export default function CategoryCard({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.tinyLogo} source={item.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 90,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },
  tinyLogo: {
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  text: {
    textTransform: "capitalize",
    fontSize: 12,
    marginTop: 6,
  },
});
