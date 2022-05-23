import React, {useContext} from "react";
import { View } from "react-native";
import CustomText from "../utils/CustomText";
import { AuthContext } from "../context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
    const [state, setState] = useContext(AuthContext);

    return (
        <View style={{paddingTop: 40}}>
            <CustomText> {JSON.stringify(state, null, 4)} </CustomText>
        </View>
    )
}

export default Home;