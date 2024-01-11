import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EvilIcons, Feather } from '@expo/vector-icons';
import Slider from '../component/Slider';
import Properties from '../component/Properties';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';



const HomeScreen = ({ propertiesData }) => {

  const [selectedType, setSelectedType] = useState("House")

  const navigation = useNavigation()

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const propertyData = [
    {
      image: require('../assets/Screen1.jpeg'),
      name: 'Beautiful House',
      location: 'City Center',
      priceRange: '5,00,000 - 6,00,000',
    },
    {
      image: require('../assets/Screen2.jpg'),
      name: 'Bell Cottage',
      location: 'Lodha Paradise Thane',
      priceRange: '5,00,000 - 6,00,000',
    },
    {
      image: require('../assets/Screen3.jpg'),
      name: 'Fairy View House',
      location: 'Elecronic City Bangalore',
      priceRange: '5,00,000 - 6,00,000',
    },
    {
      image: require('../assets/Screen1.jpeg'),
      name: 'Beautiful fdfdfeHouse',
      location: 'City Center',
      priceRange: '5,00,000 - 6,00,000',
    },
    {
      image: require('../assets/Screen3.jpg'),
      name: 'Fairy Viefddddw House',
      location: 'Elecronic City Bangalore',
      priceRange: '5,00,000 - 6,00,000',
    },
  ];

  const [properties, setProperties] = useState(Object.values(propertiesData).filter((property) => property.propertyType === 'House'))

  const handleTypeButton = (type) => {
    if(type === "House"){
      setSelectedType("House")
      const data = Object.values(propertiesData).filter(
        (property) => property.propertyType === 'House'
      );
      setProperties(data)
    } else if(type === "Villa"){
      setSelectedType("Villa")
      const data = Object.values(propertiesData).filter(
        (property) => property.propertyType === 'Villa'
      );
      setProperties(data)
    } else if(type === "Apartment"){
      setSelectedType("Apartment")
      const data = Object.values(propertiesData).filter(
        (property) => property.propertyType === 'Apartment'
      );
      setProperties(data)
    }
  }
  

  return (
    <SafeAreaView style={{ backgroundColor: "#EEF3F6" }}>
      <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 20, marginRight: 30 }}>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20, fontWeight: "800" }}>Hi Rohan !</Text>
        <EvilIcons name="bell" size={30} color="black" />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius: 10, paddingLeft: 20, fontFamily: 'Inter_400Regular', fontSize: 15, color: 'gray', position: 'relative', }}>
        <TextInput placeholder="Search" style={{ flex: 1, height: '100%', }} />
        <Feather name="search" size={24} color="gray" style={{ position: 'absolute', right: 15, }} />
      </View>

      <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "center", flexDirection: 'row', gap: 8 }}>
        <TouchableOpacity onPress={() => handleTypeButton("House")} style={{ width: 110, height: 40, backgroundColor: selectedType === "House" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "House" ? "white" : "black", fontWeight: "bold" }}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTypeButton("Villa")} style={{ width: 110, height: 40, backgroundColor: selectedType === "Villa" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "Villa" ? "white" : "black", fontWeight: "bold" }}>Villa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTypeButton("Apartment")} style={{ width: 110, height: 40, backgroundColor: selectedType === "Apartment" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "Apartment" ? "white" : "black", fontWeight: "bold" }}>Apartment</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 220 }}>

        <Slider />

        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginRight: 20, alignItems: "baseline", marginBottom: 8 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 18, fontWeight: "bold" }}>Properties for you</Text>
          <Text onPress={() => console.log(filters)} style={{ fontFamily: 'Inter_400Regular', fontSize: 13, fontWeight: "bold", color: "#5552E9" }}>See all</Text>
        </View>

        {properties.map((property, index) => (
          <Properties key={index} property={property} />
        ))}

      </ScrollView>




    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})