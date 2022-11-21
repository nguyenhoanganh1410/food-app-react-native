import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CartScreen from "./screen/CartScreen";
import HomeScreen from "./screen/HomeScreen";
import ViewCart from "./screen/ViewCart";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <CartScreen />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
