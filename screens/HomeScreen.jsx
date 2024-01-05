import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EvilIcons, Feather } from '@expo/vector-icons';
import Slider from '../component/Slider';


const HomeScreen = () => {

  const [selectedType, setSelectedType] = useState("House")

  return (
    <SafeAreaView style={{ backgroundColor: "#EEF3F6" }}>
      <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginLeft: 20, marginRight: 30 }}>
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 20, fontWeight: "800" }}>Hi Rohan !</Text>
        <EvilIcons name="bell" size={30} color="black" />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20, marginRight: 20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius: 10, paddingLeft: 20, fontFamily: 'Inter_400Regular', fontSize: 15, color: 'gray', position: 'relative',}}>
        <TextInput placeholder="Search" style={{flex: 1, height: '100%',}} />
        <Feather name="search" size={24} color="gray" style={{position: 'absolute', right: 15,}} />
      </View>

      <View style={{marginTop:20, alignItems:'center', justifyContent:"center", flexDirection: 'row', gap:8}}>
        <TouchableOpacity onPress={() => setSelectedType("House")}  style={{width: 110, height: 40, backgroundColor:selectedType === "House" ? "#3834E7" : "white", borderRadius:10, justifyContent:"center", alignItems:"center", borderColor:"#3834E7", borderWidth:2}}>
          <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:selectedType === "House" ? "white" : "black", fontWeight:"bold"}}>House</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType("Villa")} style={{width: 110, height: 40, backgroundColor:selectedType === "Villa" ? "#3834E7" : "white", borderRadius:10, justifyContent:"center", alignItems:"center", borderColor:"#3834E7", borderWidth:2}}>
          <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:selectedType === "Villa" ? "white" : "black", fontWeight:"bold"}}>Villa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType("Apartment")}  style={{width: 110, height: 40, backgroundColor:selectedType === "Apartment" ? "#3834E7" : "white", borderRadius:10, justifyContent:"center", alignItems:"center", borderColor:"#3834E7", borderWidth:2}}>
          <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:selectedType === "Apartment" ? "white" : "black", fontWeight:"bold"}}>Apartment</Text>
        </TouchableOpacity>
      </View>

      <Slider />

      

      


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})