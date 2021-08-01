import React from "react";
import { TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

export const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={tw`bg-blue-200 absolute bottom-10 right-10 h-12 w-12 rounded-full shadow-lg flex-1 justify-center items-center`}
    >
      <Ionicons style={tw`w-6 h-6 `} name={props.name} size={24} color="blue" />
    </TouchableOpacity>
  );
};
