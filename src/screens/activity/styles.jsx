import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) =>
  StyleSheet.create({
    screen: {
      height: "100%",
      backgroundColor: colors[color][50],
      flex: 1,
      justifyContent: "center",
    },
    messages: {
      backgroundColor: colors[color][50],
      maxHeight: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignSelf: "center",
      overflow: "hidden",
      marginTop: 72,
      marginBottom: 56,
    },
    type: {
      position: "absolute",
      bottom: 0,
      maxHeight: 160,
      display: "flex",
      flexDirection: "row",
      backgroundColor: colors[color][100],
      width: "100%",
      alignSelf: "center",
      justifyContent: "space-evenly",
      padding: 10,
    },
    typeText: {
      padding: 2,
      fontSize: 18,
      alignSelf: "flex-start",
      flexGrow: 1,
      overflow: "scroll",
      maxWidth: "90%",
      color: colors[color][900],
    },
    typeSubmit: {
      height: 36,
      width: 36,
      margin: 2,
      padding: 2,
      alignSelf: "flex-end",
      color: colors[color][900],
    },
    TouchableView: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginHorizontal: 4,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      paddingVertical: 8,
      margin: "auto",
      textAlign: "center",
      color: colors[color][900],
      backgroundColor: colors[color][100],
    },
    spinner: {
      margin: "auto",
      position: "absolute",
      alignSelf: "center",
    },
  });
