import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Properties = ({property}) => {
  return (
    <View style={{ flexDirection:"row"}}>
        <View style={{width: 110, height: 120, overflow:"hidden"}}>
            <Image source={property.image} style={{width: 130, height: 120, borderRadius: 20, marginRight: 10}} />
        </View>
        <View style={{ marginLeft: 10, gap:10, justifyContent:"space-evenly"}}>
            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 16, fontWeight: "bold", marginTop:10}}>{property.name}</Text>
            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 12, color: "#5552E9", marginBottom:10}}>{property.location}</Text>
            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 15, color: "#5552E9", marginBottom:20}}>Rs.{property.priceRange}</Text>
        </View>
    </View>
  )
}

export default Properties

const styles = StyleSheet.create({})