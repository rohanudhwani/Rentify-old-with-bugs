import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { FontAwesome, MaterialIcons, AntDesign, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const BottomTab = ({ activeScreen }) => {

  const navigation = useNavigation()
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <View style={{ backgroundColor: '#3834E7', borderRadius: 14, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-around', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          {activeScreen === "Home" ? (
            <Ionicons name="home" size={28} color="white" />
          ) : (
            <Ionicons name="home-outline" size={28} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
          {activeScreen === "Wishlist" ? (
            <AntDesign name="heart" size={28} color="white" />
          ) : (
            <AntDesign name="hearto" size={28} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
        {activeScreen === "Wishlist" ? (
            <FontAwesome name="filter" size={28} color="white" />
          ) : (
            <AntDesign name="filter" size={28} color="white" />
          )}
          
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          {activeScreen === "User" ? (
            <FontAwesome5 name="user-alt" size={25} color="white" />
          ) : (
            <FontAwesome5 name="user" size={25} color="white" />
          )}

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})