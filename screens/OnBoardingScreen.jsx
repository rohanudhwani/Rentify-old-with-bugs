import { Text, View, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import Swiper from 'react-native-swiper'
import { Screen1, Screen2, Screen3 } from '../assets';
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      lineContainer: {
        width: 180,
        height: 150, // You can omit this line if you want the height to be determined by content
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        position: 'absolute',
        left: 20,
        top: 120,
      },
      brandImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    description: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#555',
        textAlign: 'center',
        marginTop: 20,
    },
    
  });



const OnBoardingScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const checkOnBoardingStatus = async () => { 
      try {
        const value = await AsyncStorage.getItem('@onBoarding_Complete')
        console.log('value', value)
        if(value !== null && value ==="true") {
          navigation.replace("Login");
        }
      } catch(e) {
        console.log('error', e)
      }
    };

    checkOnBoardingStatus();
  }, [])

  const handleOnBoardingComplete = async (e) => {
    // console.log('OnBoarding Complete', e)
    if( e === 2 ){
      try{
        await AsyncStorage.setItem('@onBoarding_Complete', 'true');
        navigation.navigate("SignUp");
      } catch (e){
        console.log('error', e)
      }
    }
  }


  return (
    <View style={styles.container}>
      <Swiper onIndexChanged={handleOnBoardingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  )
}

export const ScreenOne = () => {
    return (
        <View style={tw`flex-1 items-center justify-start`}>
            <Image source={Screen1} style={tw`w-full h-[65%]`} resizeMode='cover'/>
            <View style={tw`flex items-center justify-center px-3 py-12`}>
              <Text style={tw`text-xl tracking-wider text-[#555] font-bold`}>
                Looking for a convenient home?
              </Text>
              <Text style={tw`text-lg tracking-wider text-[#777] text-center py-6`}>
                Your search ends here!
              </Text>
            </View>
        </View>
    )
}

export const ScreenTwo = () => {
    return (
        <View style={tw`flex-1 items-center justify-start`}>
            <Image source={Screen2} style={tw`w-full h-[65%]`} resizeMode='cover'/>
            <View style={tw`flex items-center justify-center px-3 py-12`}>
              <Text style={tw`text-xl tracking-wider text-[#555] font-bold`}>
                Looking for a convenient home?
              </Text>
              <Text style={tw`text-lg tracking-wider text-[#777] text-center py-6`}>
                Your search ends here!
              </Text>
            </View>
        </View>
    )
}

export const ScreenThree = () => {
    return (
      <View style={tw`flex-1 items-center justify-start`}>
            <Image source={Screen3} style={tw`w-full h-[65%]`} resizeMode='cover'/>
            <View style={tw`flex items-center justify-center px-3 py-12`}>
              <Text style={tw`text-xl tracking-wider text-[#555] font-bold`}>
                Looking for a convenient home?
              </Text>
              <Text style={tw`text-lg tracking-wider text-[#777] text-center py-6`}>
                Your search ends here!
              </Text>
            </View>
        </View>
    )
}

export default OnBoardingScreen;

