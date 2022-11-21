import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const Delivery = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    image={require('../images/location.png')} />

            </MapView>
            <View style={{ justifyContent: 'space-between', height: '100%', }}>
                <View style={{ marginTop: 30, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Image source={require('../images/back.png')} />
                    </View>
                    <View style={{ height: 40, width: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Image source={require('../images/shopping-cart.png')} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#ffffff', borderTopStartRadius: 30, borderTopRightRadius: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Image source={require('../images/Rice-Teriyaki.jpg')} resizeMode={'contain'} style={{ height: 100, width: 100, borderRadius: 1000, marginTop: -30, marginLeft: 10 }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Com gà Teriyaki</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>42.000đ</Text>
                        </View>
                        <View style={{ backgroundColor: '#F8CE40', height: 40, width: 40, marginRight: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                            <Image source={require('../images/next.png')} style={{ tintColor: 'white' }} />
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#f0f0f0', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 1000 }}>
                            <Image source={require('../images/location.png')} style={{ height: 32, width: 32 }} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>60/4 P.Trường Thọ, Tp.Thủ Đức</Text>
                            <Text style={{ marginTop: 5, fontWeight: 'bold', color: 'grey' }}>Exactly Address</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{height:40,width:40,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../images/man.png')} style={{height:40,width:40}}/>
                        </View>
                        <View style={{ marginLeft: 20, }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Võ Trung Tín</Text>
                            <Text style={{ marginTop: 5, fontWeight: 'bold', color: 'grey' }}>Food courier</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal:30,justifyContent:'center',}}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}>Your order in the way:</Text>
                        <Slider
                            style={{marginTop:10,}}
                            minimumValue={0}
                            maximumValue={20}
                            value={5}
                            minimumTrackTintColor="#F8CE40"
                            maximumTrackTintColor="#F8CE40"
                            thumbTintColor={'#f1f1f1'}/>
                        <Text style={{color:'grey',marginTop:10}}>Expect your order is: <Text style={{fontWeight:'bold',color:'black'}}>18 min</Text></Text>
                        <TouchableOpacity style={{backgroundColor:'#F8CE40',padding:15,marginTop:20,borderRadius:15,marginBottom:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:18,textAlign:'center'}}>Cancel order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Delivery