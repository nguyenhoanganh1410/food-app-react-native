import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import CardItem from "../components/CardItem";
// import RNTextArea from "@freakycoder/react-native-text-area";
export default function CheckOutScreen() {
  return (
    <View style={styles.container}>
      <CardItem />
      <CardItem />

      <View style={{ marginTop: 28 }}>
        <Text style={{ marginVertical: 14 }}>Special request to us</Text>
        <TextInput
          placeholder="Add your note here"
          multiline
          numberOfLines={6}
          style={{
            borderColor: "red",
            borderWidth: "1",
            borderRadius: 8,
            paddingHorizontal: 6,
            paddingVertical: 6,
          }}
        />
        {/* <RNTextArea
          maxCharLimit={50}
          placeholderTextColor="black"
          exceedCharCountColor="#990606"
          placeholder={"Write your review..."}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD8A9",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
});
