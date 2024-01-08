import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterScreen = () => {


  const [selectedType, setSelectedType] = useState("Family house")

  const [priceValues, setPriceValues] = useState([10, 50])
  const [distanceValues, setDistanceValues] = useState([0, 5])

  multiSliderPriceValuesChange = (values) => {
    setPriceValues(values)
  }
  multiSliderDistanceValuesChange = (values) => {
    setDistanceValues(values)
  }


  return (
    <SafeAreaView style={{ marginLeft: 20, marginRight: 20 }}>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "700", fontFamily: "Inter_400Regular" }}>I am looking for</Text>

      <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "center", flexDirection: 'row', gap: 8 }}>
        <TouchableOpacity onPress={() => setSelectedType("Family house")} style={{ width: 110, height: 40, backgroundColor: selectedType === "Family house" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "Family house" ? "white" : "black" }}>Family house</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType("Bachelor flat")} style={{ width: 110, height: 40, backgroundColor: selectedType === "Bachelor flat" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "Bachelor flat" ? "white" : "black" }}>Bachelor flat</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedType("Sublet")} style={{ width: 110, height: 40, backgroundColor: selectedType === "Sublet" ? "#3834E7" : "white", borderRadius: 10, justifyContent: "center", alignItems: "center", borderColor: "#3834E7", borderWidth: 2 }}>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 15, color: selectedType === "Sublet" ? "white" : "black" }}>Sublet</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 30, fontSize: 20, fontWeight: "700", fontFamily: "Inter_400Regular" }}>Price Range</Text>

      <View style={{ padding: 20, justifyContent: "center" }}>
        <MultiSlider
          values={[priceValues[0], priceValues[1]]}
          sliderLength={280}
          onValuesChange={multiSliderPriceValuesChange}
          min={10}
          max={100}
          step={10}
          // enableLabel={true}
          style={{ stepLabel: { backgroundColor: 'transparent', color: 'transparent' } }}
          selectedStyle={{ backgroundColor: '#3834E7' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>{priceValues[0]}K</Text>
          <Text>{priceValues[1]}K</Text>
          <Text>100K</Text>
        </View>
      </View>

      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "700", fontFamily: "Inter_400Regular" }}>Distance from my location</Text>

      <View style={{ padding: 20, justifyContent: "center" }}>
        <MultiSlider
          values={[distanceValues[0], distanceValues[1]]}
          sliderLength={280}
          onValuesChange={multiSliderDistanceValuesChange}
          min={0}
          max={10}
          step={1}
          // enableLabel={true}
          style={{ stepLabel: { backgroundColor: 'transparent', color: 'transparent' } }}
          selectedStyle={{ backgroundColor: '#3834E7' }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text>{distanceValues[0]}KM</Text>
          <Text>{distanceValues[1]}KM</Text>
          <Text>10KM</Text>
        </View>
      </View>

      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "700", fontFamily: "Inter_400Regular" }}>Bed room</Text>

      <View style={{ marginTop: 20, alignItems: 'center', justifyContent: "center", flexDirection: 'row', gap: 8 }}>
        {[1, 2, 3, 4, 5].map((option) => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelectedType(`Option ${option}`)}
            style={{
              width: 60,
              height: 60,
              backgroundColor: selectedType === `Option ${option}` ? "#3834E7" : "white",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "#3834E7",
              borderWidth: 2
            }}
          >
            <Text style={{
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              color: selectedType === `Option ${option}` ? "white" : "black"
            }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </SafeAreaView>
  )
}

export default FilterScreen

const styles = StyleSheet.create({})