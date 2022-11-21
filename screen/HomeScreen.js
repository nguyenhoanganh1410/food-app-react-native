import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, Avatar } from "@react-native-material/core";
import { AppBar, HStack, IconButton, Badge } from "@react-native-material/core";
import Appstyles from "./HomeStyle.scss";
import { TextInput } from "@react-native-material/core";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { categories, dataFood } from "../data/data";
import CategoryCard from "../component/card/CategoryCard";
import CardComponent from "../component/card/CardComponent";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{title}</Text>
  </View>
);
export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => <CategoryCard item={item} />;
  const renderCard = ({ item }) => (
    <CardComponent item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={Appstyles.padding}>
        <View style={Appstyles.appBar}>
          <IconButton icon={(props) => <Icon name="menu" {...props} />} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "22px 22px 10px 22px #15ad9b",
                marginRight: 12,
                position: "relative",
                shadowColor: "#171717",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fe5f55",
                  borderRadius: "50%",
                  boxShadow: "22px 22px 10px 22px #15ad9b",
                  right: -6,
                  top: 0,
                  zIndex: 2,
                  position: "absolute",
                  shadowColor: "#171717",
                  shadowOffset: { width: -2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Text style={{ fontSize: 12, color: "white" }}>2</Text>
              </View>
              <Icon name="cart" size={20} color="#333" />
            </View>
            <Avatar
              image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            />
          </View>
        </View>
        <View style={Appstyles.titleContent}>
          <Text style={Appstyles.titleContent_text}>Hello Hoang Anh!</Text>
        </View>

        <Text style={Appstyles.text}>Find & Restaurent in your city</Text>
        <TextInput
          variant="outlined"
          label="Search Product"
          inputStyle={{ fontSize: 12 }}
          style={{
            shadowColor: "#171717",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}
          leading={(props) => <Icon name="magnify" {...props} />}
        />
        <View style={Appstyles.category}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={Appstyles.CategoryText}>Categories</Text>
            <TouchableOpacity>
              <Text
                style={{
                  textTransform: "capitalize",
                  fontSize: 11,
                  color: "#333",
                }}
              >
                see all
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <Text style={Appstyles.NearYou}>Near You</Text>
          <TouchableOpacity>
            <Text
              style={{
                textTransform: "capitalize",
                fontSize: 11,
                color: "#333",
              }}
            >
              see all
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={dataFood}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
        />
        {/* //
      <CardPlant /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F9",
  },
  item: {
    marginRight: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  active: {
    fontSize: 18,
    fontWeight: 500,
  },
});
