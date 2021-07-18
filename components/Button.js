import React from "react";
import { TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

export const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.nav.navigate("Home")}
      style={tw`bg-blue-200 absolute bottom-10 right-10 h-24 w-24 rounded-full shadow-lg flex-1 justify-center items-center`}
    >
      <Ionicons style={tw`w-9 h-9`} name={props.name} size={36} color="blue" />
    </TouchableOpacity>
  );
};
