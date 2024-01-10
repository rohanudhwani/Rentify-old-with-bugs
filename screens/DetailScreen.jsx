import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, EvilIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({ route }) => {

    const navigation = useNavigation()

    const { property } = route.params;

    const [description, setDescription] = useState(property.description.substring(0, 150))
    const [readState, setReadState] = useState("Read More")

    const handleReadMoreLess = () => {
        if(readState === "Read More"){
            setDescription(property.description)
            setReadState("Read Less")
        } else {
            setDescription(property.description.substring(0, 150))
            setReadState("Read More")
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={{ width: '100%', height: 240 }} source={require('../assets/Screen1.jpeg')} resizeMode='cover' />

            <View style={{ marginRight: 20, marginLeft: 20, marginTop: 15 }}>
                <View style={{ alignItems: 'center', justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700", maxWidth:280 }}>{property.name}</Text>
                    <View style={{ flexDirection: "row", gap: 15 }}>
                        <Entypo name="location" size={24} color="#5552E9" onPress={() => navigation.navigate("Location", {property})} />
                        <Entypo name="eye" size={24} color="#5552E9" />
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <EvilIcons name="location" size={28} color="black" />
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16, fontWeight: "400" }}>{property.area}</Text>
                </View>

                <Text style={{ marginTop: 20 }}>{description}
                    <Text onPress={handleReadMoreLess} style={{ color: "#5552E9" }}> {readState} ...</Text>
                </Text>

                <Text style={{ marginTop: 20, fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700" }}>Facilities</Text>
                <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "space-evenly", flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                    {property.facilities.slice(0, 6).map((option, index) => (
                        <React.Fragment key={index}>
                            <TouchableOpacity
                                style={{
                                    width: 75,
                                    height: 75,
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
                                    fontSize: 13,
                                    color: "black",
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    maxWidth: 60
                                }}>{option}</Text>
                            </TouchableOpacity>
                            {((index + 1) % 3 === 0 && <View style={{ width: '100%', height: 8 }} />)}
                        </React.Fragment>
                    ))}
                </View>

                <Text style={{ marginTop: 20, fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700" }}>Owner</Text>

                <View style={{ padding: 12, marginTop: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 5, borderWidth: 2, borderColor: "#3834E7" }}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: property.owner.profileImage }} resizeMode='cover' />
                        <View>
                            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "700", marginLeft: 10 }}>{property.owner.name}</Text>
                            <View style={{ flexDirection: "row", marginLeft: 5 }}>
                                <EvilIcons name="location" size={28} color="#3834E7" />
                                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16, fontWeight: "400", color: "#3834E7" }}>{property.owner.city}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 15 }}>
                        <View style={{ borderWidth: 2, borderColor: "#3834E7", borderRadius: 200, padding: 8 }}>
                            <Ionicons name="call-outline" size={25} color="black" style={{ justifyContent: 'center', alignItems: 'center' }} />
                        </View>
                        <View style={{ borderWidth: 2, borderColor: "#3834E7", borderRadius: 200, padding: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="message-processing-outline" size={25} color="black" />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 30, width: '100%', height: 50, backgroundColor: "#3834E7", borderRadius: 10, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 17, color: "white", fontWeight: "bold" }}>Rent Now</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({})