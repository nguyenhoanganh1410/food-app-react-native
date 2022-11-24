import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useContext } from "react";
import Contex from "../store/Context";

const data = [
  {
    id: 1,
    title: "Cơm gà Teriyaki",
    img: require("../images/Rice-Teriyaki.jpg"),
    price: "42.000",
    km: 10,
  },
  {
    id: 2,
    title: "Cơm xiên gà Tenderods",
    img: require("../images/Rice-TENDERODS.jpg"),
    price: "42.000",
    km: 5,
  },
  {
    id: 3,
    title: "BURGER ZINGER",
    img: require("../images/Burger-Zinger.jpg"),
    price: "50.000",
    km: 1,
  },
];
const Profile = () => {
  const { state, depatch } = useContext(Contex);
  const { cart, userLogin } = state;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f9f9f9",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 10,
            backgroundColor: "#f0f0f3",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../images/back.png")} />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          My Profile
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../images/man.png")}
          style={{
            height: 50,
            width: 50,
            marginRight: 15,
          }}
        />
        <View style={{}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {userLogin.displayName}
          </Text>
          <Text style={{ color: "grey" }}>{userLogin.email}</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          My Favorites
        </Text>
        <TouchableOpacity>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <FlatList
          style={{}}
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flex: 1,
                  height: 300,
                  width: 300,
                  backgroundColor: "white",
                  marginRight: 10,
                  borderRadius: 15,
                }}
              >
                <View style={{ padding: 10, height: "70%", width: "100%" }}>
                  <Image
                    source={item.img}
                    resizeMode={"contain"}
                    style={{ borderRadius: 15, height: "100%", width: "100%" }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", maxWidth: 150 }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#F8CE40",
                    }}
                  >
                    {item.price} <Text>đ</Text>
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={require("../images/location.png")}
                    style={{ height: 20, width: 20 }}
                  />
                  <Text style={{ color: "grey" }}>
                    {item.km} <Text>km</Text>
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: "#F8CE40",
          height: 150,
          borderRadius: 15,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Get special discount
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            up to 85%
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              width: 150,
              borderRadius: 15,
              padding: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#f8ce40",
              }}
            >
              Claim voucher
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../images/Burger-Zinger.jpg")}
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              transform: [{ rotate: "30deg" }],
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
