import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

export const activityScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`h-full bg-blue-50`}>
      <View
        style={tw`w-full p-4 my-4 flex-1 flex-row justify-start items-center content-center border`}
      >
        <View style={tw`h-12 w-12`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={tw`rounded-full flex-1 justify-center items-center`}
          >
            <Ionicons
              style={tw`w-6 h-6`}
              name={"caret-back-outline"}
              size={24}
              iconStyle={tw`text-blue-100`}
            />
          </TouchableOpacity>
        </View>
        <Text style={tw`self-stretch m-auto text-4xl text-blue-400 font-bold`}>
          retro
        </Text>
        <View style={tw`h-12 w-12`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={tw`rounded-full flex-1 justify-center items-center`}
          >
            <Ionicons
              style={tw`w-6 h-6`}
              name={"settings-outline"}
              size={24}
              color="blue"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`bg-green-200 h-4/5 mx-8 rounded-lg`}>
        <View style={tw`bg-green-50 m-4 p-4 rounded-lg shadow-lg`}>
          <Text style={tw`text-green-900 text-sm`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
