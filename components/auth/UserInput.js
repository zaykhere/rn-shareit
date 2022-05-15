import { View, TextInput } from "react-native";
import CustomText from "../../utils/CustomText";

function UserInput({
  name,
  value,
  setValue,
  password,
  autoCapitalize = "none",
  autoComplete = "name",
}) {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <CustomText semi> {name} </CustomText>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        value={value}
        secureTextEntry={password}
        autoCorrect={false}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}

export default UserInput;
