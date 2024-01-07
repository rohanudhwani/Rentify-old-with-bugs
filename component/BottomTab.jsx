import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { FontAwesome, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const BottomTab = ({activeScreen}) => {

    const navigation = useNavigation()
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%'}}>
      <View style={{ backgroundColor: '#3834E7', borderRadius: 14, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', justifyContent: 'space-around', borderBottomLeftRadius:0, borderBottomRightRadius:0  }}>
        <TouchableOpacity>
          <FontAwesome name="home" size={28} color={activeScreen === "Home" ? "#fff" : "#5C5576"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="filter" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="user" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})