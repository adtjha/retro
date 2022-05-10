import * as React from "react";
import { View, Text, Button } from "react-native";
import { supabase } from "./supabase";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text></Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: "Custom profile header" })
        }
      />
      <Button title="login" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
