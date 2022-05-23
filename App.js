import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { AuthProvider } from "./context/Auth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator initialRouteName="Signin" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="Signin" component={Signin}   />
        <Stack.Screen name="Home" component={Home}   />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}


