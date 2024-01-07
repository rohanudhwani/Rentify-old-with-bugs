import { Image, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const handleLogin = () => {
    console.log(email,": ", password)
    navigation.navigate("OnBoarding")
  }


  return (
    <SafeAreaView style={{backgroundColor:"#EEF3F6"}}>
      <View style={{ marginTop:30, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontFamily: 'Inter_400Regular', fontSize:25, color:"#5A7587", fontWeight:"bold"}}>RENTIFY</Text>
      </View>

      <View style={{marginTop:90, marginLeft:20}}>
        <Text style={{fontFamily: 'Inter_400Regular', fontSize:25, fontWeight:"bold"}}>Login to your Account</Text>
        <Text style={{marginTop:10, fontFamily: 'Inter_400Regular', fontSize:15, color:"gray"}}>Please login to access your account</Text>
      </View>

      <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{marginTop:70, marginLeft:20, marginRight:20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius:10, paddingLeft:20, fontFamily: 'Inter_400Regular', fontSize:15, color:"gray"}} placeholder="Email Address" />
      <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{marginTop:40, marginLeft:20, marginRight:20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius:10, paddingLeft:20, fontFamily: 'Inter_400Regular', fontSize:15, color:"gray"}} placeholder="Enter Password" />

      <View style={{marginTop:20, alignItems:"flex-end"}}>
        <Text style={{marginRight:20, fontFamily: 'Inter_400Regular', fontSize:13, color:"gray"}}>Forgot Password?</Text>
      </View>

      <TouchableOpacity onPress={() => handleLogin()} style={{marginTop:30, marginLeft:20, marginRight:20, height: 50, backgroundColor:"#3834E7", borderRadius:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:"white", fontWeight:"bold"}}>Login</Text>
      </TouchableOpacity>

      <View style={{marginTop:25, justifyContent:"center", alignItems:"center"}}>
        <Text>Or Login with</Text>
      </View>
      
  
      <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginTop:25, marginLeft:20, marginRight:20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius:10, paddingLeft:20, fontFamily: 'Inter_400Regular', fontSize:15, color:"gray"}} placeholder="Email Address">
        <Image source={require('../assets/google.png')} style={{width:30, height:30, marginLeft:40}} />
        <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:"gray", marginLeft:20}}>Login using Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:"row", alignItems:"center", marginTop:25, marginLeft:20, marginRight:20, height: 50, borderColor: '#3834E7', borderWidth: 2, borderRadius:10, paddingLeft:20, fontFamily: 'Inter_400Regular', fontSize:15, color:"gray"}} placeholder="Email Address">
        <Image source={require('../assets/facebook.png')} style={{width:16, height:30, marginLeft:45}} />
        <Text style={{fontFamily: 'Inter_400Regular', fontSize:15, color:"gray", marginLeft:29}}>Login using Facebook</Text>
      </TouchableOpacity>


    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})