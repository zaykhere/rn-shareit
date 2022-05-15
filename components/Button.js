import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from '../utils/CustomText';

function Button({title, backgroundColor="#ff9900", handleSubmit, loading}) {
  return (
    <TouchableOpacity 
    onPress={handleSubmit}
    style={{
        backgroundColor: backgroundColor,
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
        marginHorizontal: 18,
        borderRadius: 24
      }}>
        <CustomText bold medium center> 
          {loading ? 'Please wait...' : title}
        </CustomText>
      </TouchableOpacity>
  )
}

export default Button