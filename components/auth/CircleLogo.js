import React from 'react';
import {View, Image} from "react-native";

function CircleLogo() {
  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Image 
        source={require("../../assets/shareit.png")}
        style={{width: 260, height: 140, marginVertical: 20}} />
    </View>
  )
}

export default CircleLogo