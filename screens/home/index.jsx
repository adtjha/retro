import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { topics } from "../../Constants";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";



export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Title />
      {topics.map((t, i) => (
        <Card key={i} nav={navigation} {...t} />
      ))}
      <TouchableOpacity
        onPress={() => console.log("popup")}
        style={styles.TouchableView}
      >
        <Ionicons style={styles.icon} name={"receipt-outline"} size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
