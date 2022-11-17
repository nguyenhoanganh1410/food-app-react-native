import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screen/StartScreen";
import HistoryScreen from "./screen/HistoryScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HistoryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
