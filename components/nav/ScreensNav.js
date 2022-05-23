import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../../screens/Signin";
import Signup from "../../screens/Signup";
import Home from "../../screens/Home";
import { AuthContext } from "../../context/Auth";
import HeaderTabs from "./HeaderTabs";

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
  const [state, setState] = useContext(AuthContext);
  const authenticated = state && state.token !== "" && state.user !== [];

  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      {authenticated ? (
        <Stack.Screen name="Home" component={Home} options={{
          title: "ShareIt",
          headerRight: () => <HeaderTabs />
        }} />
      ) : (
        <>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        </>
      )}
    </Stack.Navigator>
  );
}
