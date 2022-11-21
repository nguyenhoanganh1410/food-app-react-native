import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import coffe from "../../../images/salads-removebg-preview.png";
export default function CardItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={coffe} />
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>
          Stacbut Hot Coffe
        </Text>
        <Text style={{ marginVertical: 6 }}>5.0*</Text>
        <Text style={{ color: "#FF731D", fontWeight: "bold" }}>$20.00</Text>
      </View>
      <View style={styles.options}>
        <View style={styles.option}>
          <Text>-</Text>
        </View>
        <TextInput style={styles.input} value="1" />
        <View style={styles.option}>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    width: 24,
    height: 24,
    borderRadius: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderRadius: 12,
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FDF0E0",
    marginTop: 12,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 6,
  },
  //   left: {
  //     flexDirection: "row",
  //   },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  options: {
    backgroundColor: "#E3C770",
    height: "90%",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginRight: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: "100%",
    resizeMode: "stretch",
  },
});
