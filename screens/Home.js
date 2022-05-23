import React, {useContext} from "react";
import { View } from "react-native";
import { getStatusBarHeight} from 'react-native-status-bar-height';
import CustomText from "../utils/CustomText";
import { AuthContext } from "../context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterTabs from "../components/nav/FooterTabs";

const Home = () => {
    const [state, setState] = useContext(AuthContext);

    return (
        <View style={{marginTop: getStatusBarHeight() + 5, flex: 1, justifyContent: "space-between"}}>
            <CustomText> {JSON.stringify(state, null, 4)} </CustomText>
            <FooterTabs />
        </View>
    )
}

export default Home;