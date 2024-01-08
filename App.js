import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetailScreen, FilterScreen, HomeScreen, LoginScreen, OnBoardingScreen } from './screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect, useState } from 'react';
import BottomTab from './component/BottomTab';


const Stack = createNativeStackNavigator()

const MyComponent = ({setActiveScreen}) => {
  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentScreen = navigation.getCurrentRoute().name
      setActiveScreen(currentScreen)
    });

    return unsubscribe
  }, [navigation])
}

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_700Bold,
  });

  const [activeScreen, setActiveScreen] = useState("")

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>



      {activeScreen !== "Login" && activeScreen !== "OnBoarding" && activeScreen !== "Filter" && activeScreen !== "Detail" && (
        <BottomTab activeScreen={activeScreen}/>
      ) }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
