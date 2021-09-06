import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) =>
  StyleSheet.create({
    screen: {
      position: "absolute",
      top: 0,
      zIndex: 4,
      paddingVertical: 8,
      marginTop: 0,
      paddingTop: 32,
      backgroundColor: colors[color][100],
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "stretch",
    },
    TouchableView: {
      borderRadius: 20,
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginHorizontal: 4,
    },
    icon: {
      color: colors[color][900],
      padding: 8,
    },
    text: {
      alignSelf: "center",
      margin: "auto",
      fontSize: 24,
      flexGrow: 1,
      color: colors[color][900],
    },
  });
