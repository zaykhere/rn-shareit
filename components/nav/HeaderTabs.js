import React, {useContext} from "react";
import {View, TouchableOpacity} from "react-native";
import { getStatusBarHeight} from 'react-native-status-bar-height';
import CustomText from "../../utils/CustomText";
import {AuthContext} from "../../context/Auth";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HeaderTabs = () => {
    const [state, setState] = useContext(AuthContext);

    const signOut = async () => {
        setState({token: '', user: []});
        await AsyncStorage.removeItem("@auth");
    }

    return (
    <View>
        <TouchableOpacity onPress={signOut}>
            <FontAwesome5 name="sign-out-alt" size={25} color="#ff9900" />
        </TouchableOpacity>
    </View>
    )
}

export default HeaderTabs;
