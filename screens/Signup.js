import React, { useState, useContext } from "react";
import { Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import axios from "axios";
import CustomText from "../utils/CustomText";
import UserInput from "../components/auth/UserInput";
import Button from "../components/Button";
import CircleLogo from "../components/auth/CircleLogo";
import { AuthContext } from "../context/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Signup({navigation}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //From Context
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post(`/api/users/signup`, {
        name,
        email,
        password,
      });
      if(data.error) {
        alert(data.error);
      }
      else {
      setState(data);
      //save response in async storage
      await AsyncStorage.setItem('@auth', JSON.stringify(data));

      setLoading(false);
      navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.response.data.error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: "center", paddingTop: 40 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <CircleLogo />
        <CustomText title center>
          Sign Up
        </CustomText>

        <UserInput
          name="NAME"
          value={name}
          autoCapitalize="words"
          autoComplete="name"
          setValue={setName}
        />
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
          title="Sign Up"
          backgroundColor="#ff9900"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <CustomText small center>
          Already Joined? 
          <CustomText color="#ff2222" onPress={()=> navigation.navigate("Signin")}>
            Sign In
          </CustomText>
        </CustomText>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signup;
