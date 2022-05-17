import React, { useState } from "react";
import { Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import axios from "axios";
import CustomText from "../utils/CustomText";
import UserInput from "../components/auth/UserInput";
import Button from "../components/Button";
import CircleLogo from "../components/auth/CircleLogo";
import { API } from "../config";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signin({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`${API}/api/users/signin`, {
        email,
        password,
      });
      if(data.error) {
        alert(data.error)
      }
      else {
      //save response in async storage
      
      await AsyncStorage.setItem('@auth', JSON.stringify(data.token));

      console.log(data.token);
      setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.response.data.error);
    }
  };

  const loadFromAsyncStorage = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("FROM ASYNC STORAGE", data);
  }

  loadFromAsyncStorage();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center", paddingTop: 40 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <CircleLogo />
        <CustomText title center>
          Sign In
        </CustomText>
        <UserInput
          name="EMAIL"
          value={email}
          setValue={setEmail}
          autoComplete="email"
        />
        <UserInput
          name="PASSWORD"
          value={password}
          password={true}
          autoComplete="password"
          setValue={setPassword}
        />

        <Button
          title="Sign In"
          backgroundColor="#ff9900"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <CustomText small center>
          Not yet registered? 
          <CustomText color="#ff2222" onPress={()=> navigation.navigate("Signup")}>
           Sign Up
          </CustomText>
        </CustomText>

        <CustomText small center color="orange" style={{marginTop: 10}}>
            Forgot Password?
        </CustomText>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signin;
