import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Message = ({data, time, color}) => {

  const formattedTime = (time) => {
    const dateTime = new Date(time);
    const hours = dateTime.getHours();
    const hourStr = hours < 10 ? "0" + hours.toString() : hours.toString();
    const min = dateTime.getMinutes();
    const minStr = min < 10 ? "0" + min.toString() : min.toString();
    const date = dateTime.getDate();
    const dateStr = date < 10 ? "0" + date.toString() : date.toString();
    const month = dateTime.getMonth();
    const monthStr = month < 10 ? "0" + month.toString() : month.toString();
    const year = dateTime.getFullYear();
    
    return `${hourStr}:${minStr}  ${dateStr}/${monthStr}/${year}`;
  };

  return (
    <View style={styles(color).screen}>
      <Text style={styles(color).text}>
        {data}
      </Text>
      <Text style={styles(color).time}>
        {formattedTime(time)}
      </Text>
    </View>
  );
};
