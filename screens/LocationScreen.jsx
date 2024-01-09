import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker } from 'react-native-maps';
import StarRating from 'react-native-star-rating-widget';

const INITIAL_REGION = {
    latitude: 20.5937,
    longitude: 81.9629,
    latitudeDelta: 26,
    longitudeDelta: 26,
}

const coordinate = {latitude: 21.1458, longitude: 79.0882}

const zoomedRegion = {
    latitude: coordinate.latitude,
    longitude: coordinate.longitude,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }


const LocationScreen = () => {

    const [rating, setRating] = useState(0);
    // console.log(rating)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EEF3F6" }}>
            <MapView style={{ width: '100%', height: '75%' }} initialRegion={zoomedRegion}>
                <Marker coordinate={coordinate} />
            </MapView>

            <View style={{ flex: 1, flexDirection: "row", gap: 6, marginRight: 20, marginLeft: 20, marginTop:10}}>
                <Image source={require('../assets/Screen1.jpeg')} style={{ width: 150, height: 150, borderRadius: 20 }} />
                <View style={{ gap:20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fairy view house</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Rs. 60K/Month</Text>
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        color='#5552E9'
                        maxStars={4}
                        enableHalfStar={false}
                        starSize={28} style={{marginBottom:60}}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LocationScreen

const styles = StyleSheet.create({})


