import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Message } from "../../components/Message";
import { ActivityTitle } from "../../components/ActivityTitle";
import { messages } from "../../Constants";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const Activity = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { color, name } = route.params;

  return (
    <SafeAreaView style={styles(color).screen}>
      <ActivityTitle navigation={navigation} title={name} color={color} />
      <ScrollView style={styles(color).messages}>
        {messages.map((m) => (
          <Message key={m.id} {...m} color={color} />
        ))}
      </ScrollView>

      <View style={styles(color).type}>
        <TextInput
          style={styles(color).typeText}
          multiline={true}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles(color).TouchableView}
        >
          <Ionicons style={styles(color).typeSubmit} name={"send"} size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
