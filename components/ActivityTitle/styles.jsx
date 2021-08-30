import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) => StyleSheet.create({
  screen: {
    marginTop: 32,
    backgroundColor: colors[color][600],
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  TouchableView: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 4
  },
  icon: {
    color: colors[color][100],
    padding: 8,
  },
  text: {
    textAlign: "center",
    alignSelf: "center",
    margin: "auto",
    fontSize: 24,
    flexGrow: 1,
    color: colors[color][100],
    fontWeight: "bold",
  },
});
