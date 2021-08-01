import React from "react";
import { SafeAreaView, Text } from "react-native";
import { CustomButton } from "../components/Button";
import tw from "tailwind-react-native-classnames";
import { Title } from "../components/title";

export const activityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`h-full bg-blue-50`}>
      <Title />
      <Text style={tw`m-auto text-2xl text-blue-400 font-bold`}>
        Hello MotherFucker
      </Text>
      <CustomButton
        name="home-outline"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};
