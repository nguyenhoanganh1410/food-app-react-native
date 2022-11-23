import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screen/StartScreen";
import HistoryScreen from "./screen/HistoryScreen";
import Profile from "./screen/Profile";
import Delivery from "./screen/Delivery";

import CartScreen from "./screen/CartScreen";
import HomeScreen from "./screen/HomeScreen";
import ViewCart from "./screen/ViewCart";
import Login from "./screen/Login/Login";
import Register from "./screen/Login/Register";
import Recover from "./screen/Login/Recover";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Provider from "./store/Provider";
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={StartScreen} />

          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddToCart" component={CartScreen} />
          <Stack.Screen name="ViewCartScreen" component={ViewCart} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Recover" component={Recover} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
