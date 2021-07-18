import React from "react";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Card } from "../components/Card";
import { CustomButton } from "../components/Button";
import { Title } from "../components/title";

export const homeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`h-full bg-blue-50`}>
      <Title />
      <Card
        nav={navigation}
        status="PENDING"
        color="green"
        value="music production"
      />
      <Card nav={navigation} status="DONE" color="blue" value="startup phase" />
      <Card
        nav={navigation}
        status="MISSED"
        color="red"
        value="supporting job"
      />
      <CustomButton name="add-outline" nav={navigation} />
    </SafeAreaView>
  );
};
