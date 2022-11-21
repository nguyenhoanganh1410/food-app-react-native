import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screen/StartScreen";
import HistoryScreen from "./screen/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
