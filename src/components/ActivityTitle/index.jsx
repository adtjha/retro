import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const ActivityTitle = ({ navigation, title, color }) => {
  return (
    <View style={styles(color).screen}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles(color).TouchableView}
      >
        <Ionicons style={styles(color).icon} name={"arrow-back-outline"} size={24} />
      </TouchableOpacity>
      <Text style={styles(color).text}>{title.toLowerCase()}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles(color).TouchableView}
      >
        <Ionicons style={styles(color).icon} name={"settings-outline"} size={24} />
      </TouchableOpacity>
    </View>
  );
};
