import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export const Title = () => (
  <View style={tw`p-12 mt-8 mb-4`}>
    <Text style={tw`m-auto text-4xl text-blue-400 font-bold`}>retro</Text>
  </View>
);
