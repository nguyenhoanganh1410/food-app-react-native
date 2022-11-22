import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screen/StartScreen";
import HistoryScreen from "./screen/HistoryScreen";
import Profile from "./screen/Profile";
import Delivery from "./screen/Delivery";

import CartScreen from "./screen/CartScreen";
import HomeScreen from "./screen/HomeScreen";
import ViewCart from "./screen/ViewCart";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Provider from "./store/Provider";
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="AddToCart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewCartScreen"
            component={ViewCart}
            options={{ headerShown: false }}
          />
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
    </Provider>
    // <View style={styles.container}>
    //   <CartScreen />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
