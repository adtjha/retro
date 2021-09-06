import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) =>
  StyleSheet.create({
    TouchableFeedback: {
      zIndex: 2,
    },
    screen: {
      marginHorizontal: 32,
      marginVertical: 8,
      paddingHorizontal: 18,
      backgroundColor: colors[color][200],
      borderColor: colors[color][900],
      borderRadius: 12,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignContent: "space-between",
      shadowColor: colors[color][100],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      zIndex: 2,
    },
    text: {
      fontSize: 18,
      color: colors[color][900],
      fontWeight: "900",
      marginVertical: 16,
    },
    icon: {
      paddingLeft: 2,
      marginLeft: "auto",
      fontSize: 36,
    },
    img: {
      paddingLeft: 2,
      marginLeft: "auto",
      width: 36,
      height: 36,
      borderRadius: 24,
    },
    emoji: {
      maxWidth: "50%",
      paddingLeft: 2,
      marginLeft: "auto",
      fontSize: 24,
      marginTop: -2,
    },
  });
