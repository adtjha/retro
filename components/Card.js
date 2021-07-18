import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

export const Card = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.nav.navigate("Activity");
      }}
    >
      <View
        style={tw.style(
          "mx-8",
          "my-4",
          "p-4",
          "bg-" + props.color + "-200",
          "border-" + props.color + "-900",
          "rounded-lg",
          "flex",
          "flex-row",
          "items-center",
          "content-between",
          "shadow"
        )}
      >
        <Text
          style={tw.style(
            "text-lg",
            "text-" + props.color + "-900",
            "font-semibold"
          )}
        >
          {props.value}
        </Text>
        <Ionicons
          style={tw.style("pl-2", "ml-auto")}
          name={
            props.status === "PENDING"
              ? "stopwatch-outline"
              : props.status === "DONE"
              ? "close-circle-outline"
              : props.status === "MISSED"
              ? "alert-circle-outline"
              : ""
          }
          size={24}
          color={props.color}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
