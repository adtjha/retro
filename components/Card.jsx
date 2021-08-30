import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

export const Card = ({nav, status, name}) => {
  const {type, color} = status;

  return (
    <TouchableNativeFeedback
      onPress={() => {
        nav.navigate("Activity", {
          type,
          color,
          name,
        });
      }}
    >
      <View
        style={tw.style(
          "mx-8",
          "my-4",
          "p-4",
          "bg-" + color + "-200",
          "border-" + color + "-900",
          "rounded-lg",
          "flex",
          "flex-row",
          "items-center",
          "content-between",
          "shadow"
        )}
      >
        <Text
          style={tw.style("text-lg", "text-" + color + "-900", "font-semibold")}
        >
          {name}
        </Text>
        <Ionicons
          style={tw.style("pl-2", "ml-auto")}
          name={
            type === "PENDING"
              ? "stopwatch-outline"
              : type === "DONE"
              ? "close-circle-outline"
              : type === "MISSED"
              ? "alert-circle-outline"
              : ""
          }
          size={24}
          color={color}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
