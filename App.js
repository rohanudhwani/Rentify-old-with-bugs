import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetailScreen, FilterScreen, HomeScreen, LocationScreen, LoginScreen, OnBoardingScreen, ViewScreen } from './screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect, useState } from 'react';
import BottomTab from './component/BottomTab';
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';

const userRef = ref(db, '/properties');




const Stack = createNativeStackNavigator()




const MyComponent = ({ setActiveScreen }) => {
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

  
  const [propertiesData, setPropertiesData] = useState(null);

  // Attach an asynchronous callback to read the data
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    setPropertiesData(data);
  }, {
    onlyOnce: true, // This ensures the callback is triggered only once
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} propertiesData={propertiesData} />}
        </Stack.Screen>
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="View" component={ViewScreen} />
      </Stack.Navigator>



      {activeScreen !== "Login" && activeScreen !== "OnBoarding" && activeScreen !== "Filter" && activeScreen !== "Detail" && activeScreen !== "Location" && activeScreen !== "View" && (
        <BottomTab activeScreen={activeScreen} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
