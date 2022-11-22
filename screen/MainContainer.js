import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./HomeScreen";
// import DetailsScreen from "./screens/DetailsScreen";
// import SettingsScreen from "./screens/SettingsScreen";

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const heartName = "Hearts";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === heartName) {
              iconName = focused ? "heart" : "heart-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
        // tabBarOptions={{
        //   activeTintColor: "tomato",
        //   inactiveTintColor: "grey",
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70 },
        // }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={heartName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={HomeScreen} />
        <Tab.Screen name={settingsName} component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
