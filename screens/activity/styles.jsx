import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) =>
  StyleSheet.create({
    screen: {
      height: "100%",
      backgroundColor: colors[color][800],
    },
    messages: {
      backgroundColor: colors[color][800],
      maxHeight: "95%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignSelf: "center",
      overflow: "hidden",
      opacity: 0.8
    },
    type: {
      height: 64,
      display: "flex",
      flexDirection: "row",
      backgroundColor: colors[color][800],
      width: "100%",
      alignSelf: "center",
      justifyContent: "space-evenly",
      padding: 10,
      shadowColor: colors[color][100],
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    typeText: {
      padding: 2,
      fontSize: 18,
      alignSelf: "flex-start",
      flexGrow: 1,
      overflow: "scroll",
      maxWidth: "90%",
      color: colors[color][100],
    },
    typeSubmit: {
      height: 36,
      width: 36,
      margin: 2,
      padding: 2,
      alignSelf: "flex-end",
    },
    TouchableView: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginHorizontal: 4,
    },
  });
