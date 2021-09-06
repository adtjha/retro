import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import moment from "moment";

export const Message = ({ time, data, color }) => {
  console.log({ time, data });
  return (
    <View style={styles(color).screen}>
      <Text style={styles(color).text}>{data}</Text>
      <Text style={styles(color).time}>{moment(time).format("HH:mm")}</Text>
    </View>
  );
};
