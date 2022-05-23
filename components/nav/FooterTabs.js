import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import CustomText from "../../utils/CustomText";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const Tab = ({name, icon}) => (
    <TouchableOpacity>
        <>
          <FontAwesome5 name={icon} size={25} style={{
              marginBottom: 3,
              alignSelf: 'center'
          }} />
          <CustomText> {name} </CustomText>
        </>
      </TouchableOpacity>
)

const FooterTabs = () => {
  return (
    <View style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between"
    }}>
      <Tab name="Home" icon="home" />
      <Tab name="Post" icon="plus-square" />
      <Tab name="Links" icon="list-ol" />
      <Tab name="Account" icon="user"  />
    </View>
  );
};

export default FooterTabs;
