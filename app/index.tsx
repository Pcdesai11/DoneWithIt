import React from "react"; 
import {Dimensions,StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback} from "react-native";
import {useDeviceOrientation } from "@react-native-community/hooks";
export default function App() {
  
 return(
  <View style={{ flex: 1 }}>
    <View style={{
      backgroundColor: "dodgerblue",
      flex: 1
    }}></View>
    <View style={{
      backgroundColor: "gold",
      flex: 1
    }}></View>
  </View>
 )
}