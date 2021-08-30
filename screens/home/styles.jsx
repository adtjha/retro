import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = StyleSheet.create({
  screen: {
    height: "100%",
    backgroundColor: colors.blue[900],
  },
  TouchableView: {
    borderRadius: 48,
    padding: 8,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: colors.blue[800],
    position: "absolute",
    bottom: 32,
    right: 32,
    shadowColor: colors.blue[100],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  icon: {
    color: colors.blue[100],
    padding: 8,
  },
});
