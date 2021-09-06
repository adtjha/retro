import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) =>
  StyleSheet.create({
    screen: {
      backgroundColor: colors[color][50],
      marginHorizontal: 16,
      marginVertical: 16,
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderStyle: "dashed",
      shadowColor: colors[color][50],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    text: {
      fontSize: 16,
      color: colors[color][900],
    },
    time: {
      fontSize: 12,
      textAlign: "right",
      color: colors[color][900],
      position: "absolute",
      bottom: 1,
      right: 1,
      opacity: 0.8,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  });
