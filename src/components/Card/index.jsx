import React from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const Card = ({ nav, name, color, img }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        nav.navigate("Activity", {
          img,
          color,
          name,
        });
      }}
      style={styles(color).TouchableFeedback}
    >
      <View style={styles(color).screen}>
        <Text style={styles(color).text}>{name}</Text>
        <CustomImage img={img} color={color} />
      </View>
    </TouchableNativeFeedback>
  );
};

const CustomImage = ({ img, color }) => {
  const { type, src } = img;
  switch (type) {
    case "icon":
      return (
        <Ionicons
          style={styles(color).icon}
          name={src}
          size={24}
          color={color}
        />
      );
    case "image":
      return (
        <Image
          style={styles(color).img}
          source={{
            uri: src,
          }}
        />
      );
    case "emoji":
      return <Text style={styles(color).emoji}>{src}</Text>;
  }
};
