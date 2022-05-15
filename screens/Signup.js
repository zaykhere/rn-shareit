import React, { useState } from "react";
import { Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import axios from "axios";
import CustomText from "../utils/CustomText";
import UserInput from "../components/auth/UserInput";
import Button from "../components/Button";
import CircleLogo from "../components/auth/CircleLogo";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
          <CustomText color="#ff2222">
            Sign In
          </CustomText>
        </CustomText>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Signup;
