import React, { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../Color";
import { Picker } from "@react-native-picker/picker";
import emojiRegex from "emoji-regex";

export const color = "coolGray";

export const Home = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Channel Name");
  const [cardColor, setCardColor] = useState("coolGray");
  const [imgSrc, setImgSrc] = useState("✋😉✊⛏️");
  const availableColors = Object.keys(colors);
  const channel = useRef([]);

  useEffect(() => {});

  return (
    <SafeAreaView style={styles(color).screen}>
      <View style={styles(color).titleView}>
        <Text style={styles(color).titleText}>retro</Text>
      </View>
      {channel.current.length > 1 ? (
        channel.current.map((t, i) => <Card key={i} nav={navigation} {...t} />)
      ) : (
        <View style={styles(color).spinner}>
          <ActivityIndicator color={colors[color][400]} size="large" />
        </View>
      )}
      {show && (
        <View style={styles(color).form}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 256}
          >
            <ScrollView>
              {/* CHOOSE NAME */}
              <Text style={styles(color).dividerText}>NAME</Text>
              <TextInput
                style={styles(color).input}
                onChangeText={(e) => setName(e)}
                value={name}
                placeholder="Channel name goes here."
              />

              {/* CHOOSE COLOR */}
              <Text style={styles(color).dividerText}>COLOR</Text>
              <TouchableOpacity style={styles(color).chooser}>
                <Picker
                  selectedValue={cardColor}
                  onValueChange={(e) => setCardColor(e)}
                  style={styles(color).picker}
                  itemStyle={styles(cardColor).item}
                >
                  {availableColors.map((e, i) => (
                    <Picker.Item
                      key={e + i}
                      label={e
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                      value={e}
                    />
                  ))}
                </Picker>
              </TouchableOpacity>

              {/* CHOOSE ICON */}
              <Text style={styles(color).dividerText}>ICON</Text>

              <TextInput
                style={styles(color).input}
                onChangeText={(e) => {
                  let arr = [...e].map((t) => emojiRegex().exec(t));
                  arr = arr.filter((a) => a != null);
                  setImgSrc(arr.join(""));
                }}
                value={imgSrc}
                placeholder="✋😉✊⛏️"
              />
            </ScrollView>

            {/* CARD COLOR */}
            <View style={styles(cardColor).card}>
              <Text style={styles(cardColor).cardText}>{name}</Text>
              <Text style={styles(color).cardIcon}>{imgSrc}</Text>
            </View>
            <TouchableOpacity
              style={styles(color).customButton}
              onPress={() => {
                if (name && cardColor && imgSrc) {
                  channel.current.push({
                    name,
                    color: cardColor,
                    img: {
                      type: "emoji",
                      src: imgSrc,
                    },
                  });
                  setShow(false);
                } else {
                  Alert.alert("Cannot press this one");
                }
              }}
            >
              <Text style={styles(cardColor).buttonText}>SAVE</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      )}
      <TouchableOpacity
        onPress={() => setShow(show ? false : true)}
        style={styles(color).TouchableView}
      >
        <Ionicons
          style={styles(color).icon}
          name={show ? "close-outline" : "apps-outline"}
          size={24}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
