import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
// import tailwind from "tailwind-rn";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

const title = (
  <View style={tw`p-12 mx-8`}>
    <Text style={tw`m-auto text-4xl text-blue-400 font-bold`}>retro</Text>
  </View>
);

const Card = (props) => {
  return (
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
        "justify-between",
        "shadow"
      )}
    >
      <View style={tw.style("flex-1")}>
        <Text
          style={tw.style(
            "text-lg",
            "text-" + props.color + "-900",
            "self-start",
            "font-semibold"
          )}
        >
          {props.value}
        </Text>
      </View>
      <View
        style={tw.style("m-auto", "px-2", "content-center", "flex", "flex-row")}
      >
        <Text
          style={tw.style(
            "bg-" + props.color + "-100",
            "text-" + props.color + "-600",
            "rounded",
            "shadow",
            "px-4",
            "py-2",
            "m-auto"
          )}
        >
          {props.status}
        </Text>
        <Ionicons
          style={tw.style("pl-2", "m-auto")}
          name={
            props.status === "pending"
              ? "stopwatch-outline"
              : props.status === "done"
              ? "close-circle-outline"
              : props.status === "missed"
              ? "alert-circle-outline"
              : ""
          }
          size={24}
          color="blue"
        />
      </View>
    </View>
  );
};

const App = () => (
  <SafeAreaView style={tw`h-full bg-blue-50`}>
    {title}
    <Card status="pending" color="green" value="music production" />
    <Card status="done" color="blue" value="startup phase" />
    <Card status="missed" color="red" value="supporting job" />
    {button()}
  </SafeAreaView>
);

export default App;
function button() {
  return (
    <TouchableOpacity
      style={tw`bg-blue-200 absolute bottom-10 inset-x-3/4 h-12 w-12 rounded-full shadow-lg flex-1 justify-center items-center`}
      onPress={() => {
        console.log("UUUU");
      }}
    >
      <Ionicons style={tw`w-9 h-9`} name="add-outline" size={36} color="blue" />
    </TouchableOpacity>
  );
}
