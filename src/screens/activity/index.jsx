import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  SectionList,
  ActivityIndicator,
} from "react-native";
import { Message } from "../../components/Message";
import { ActivityTitle } from "../../components/ActivityTitle";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import moment from "moment";
import colors from "../../Color";

export const Activity = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const { color, name } = route.params;
  const messages = useRef([]);
  const sectionRef = useRef();
  const DATA = useRef();
  const [isLoading, setLoading] = useState(true);

  const getMessages = async () => {
    DATA.current = [];
    await fetch("https://612b471222bb490017893a8b.mockapi.io/messages")
      .then((response) => response.json())
      .then((data) => {
        messages.current = [...data];
      })
      .catch((err) => console.log(err));

    messages.current.forEach((message) => {
      const index = DATA.current.findIndex((d) =>
        moment(d.title).isSame(message.time, "day")
      );
      if (index === -1) {
        const item = {};
        item.title = message.time;
        item.data = [message];
        DATA.current.push(item);
      } else {
        DATA.current[index].data.push(message);
      }
    });

    DATA.current.sort((a, b) => {
      return new Date(a.title) - new Date(b.title);
    });

    DATA.current.forEach((d) => {
      d.data.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
      });
    });

    setLoading(false);
    sectionRef.current.sections = [...DATA.current];
    // sectionRef.current.scrollToLocation(
    //   DATA.current[DATA.current.length - 1].id
    // );
  }; 

  useEffect(() => {
    getMessages();
  });

  return (
    <SafeAreaView style={styles(color).screen}>
      <ActivityTitle navigation={navigation} title={name} color={color} />
      {isLoading ? (
        <View style={styles(color).spinner}>
          <ActivityIndicator color={colors[color][400]} size="large" />
        </View>
      ) : (
        <SectionList
          style={styles(color).messages}
          ref={sectionRef}
          sections={DATA.current}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Message {...item} color={color} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles(color).title}>
              {moment(title).format("D MMMM YYYY") ===
              moment().format("D MMMM YYYY")
                ? "Today"
                : moment(title).format("D MMMM YYYY")}
            </Text>
          )}
        />
      )}

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
          <Ionicons
            style={styles(color).typeSubmit}
            name={"send-outline"}
            size={24}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
