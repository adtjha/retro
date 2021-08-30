import { StyleSheet } from "react-native";
import colors from "../../Color";

export const styles = (color) => StyleSheet.create({
  screen: {
    backgroundColor: colors[color][900],
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 16,
    shadowColor: colors[color][100],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: colors[color][200],
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    textAlign: "right",
    margin: 4,
    opacity: 0.6,
    color: colors[color][200],
  },
});
