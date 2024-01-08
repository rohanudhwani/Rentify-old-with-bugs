import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const DetailScreen = () => {
    return (
        <View>
            <Image style={{ width: '100%', height: 240 }} source={require('../assets/Screen1.jpeg')} resizeMode='cover' />

            <View style={{ marginRight: 20, marginLeft: 20, marginTop: 15 }}>
                <View style={{ alignItems: 'baseline', justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700" }}>Fairy view House</Text>
                    <Entypo name="eye" size={24} color="#5552E9" />
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <EvilIcons name="location" size={28} color="black" />
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16, fontWeight: "400" }}>Electronic City Bangalore</Text>
                </View>

                <Text style={{ marginTop: 20 }}>Simple house with calm area with a cool view located in the city center makes it easy for you to access the whole city
                    <Text style={{ color: "#5552E9" }}> Read More ...</Text>
                </Text>

                <Text style={{ marginTop: 20, fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700" }}>Facilities</Text>
                <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "space-evenly", flexDirection: 'row', gap: 8 }}>
                    {["3BHK", "Wifi", "Gym", "Parking"].map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={{
                                width: 70,
                                height: 70,
                                backgroundColor: "white",
                                borderRadius: 100,
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "#3834E7",
                                borderWidth: 2
                            }}
                        >
                            <Text style={{
                                fontFamily: 'Inter_400Regular',
                                fontSize: 15,
                                color: "black"
                            }}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={{ marginTop: 20, fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700" }}>Owner</Text>

                <View style={{ padding: 15, marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 5, borderWidth: 2, borderColor: "#3834E7" }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocKlmfi5NPiD1oMp68TCIiB8el5byw-Lntgnyp0DSs2NZ8SC=s317-c-no" }} resizeMode='cover' />
                    <View>
                        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700", marginLeft: 10 }}>Benny Jain</Text>
                        <View style={{ flexDirection: "row", marginLeft: 5 }}>
                            <EvilIcons name="location" size={28} color="#3834E7" />
                            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16, fontWeight: "400", color: "#3834E7" }}>Bangalore</Text>
                        </View>
                    </View>

                    <View style={{ marginLeft: 45, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 15 }}>
                        <View style={{ borderWidth: 2, borderColor: "#3834E7", borderRadius: 200, padding: 8 }}>
                            <Ionicons name="call-outline" size={25} color="black" style={{ justifyContent: 'center', alignItems: 'center' }} />
                        </View>
                        <View style={{ borderWidth: 2, borderColor: "#3834E7", borderRadius: 200, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="message-processing-outline" size={25} color="black" />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 30, width: '100%', height: 50, backgroundColor: "#3834E7", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: "white", fontWeight:"bold" }}>Rent Now</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})