import * as React from "react";
import { View, Text, Button } from "react-native";
import { supabase } from "./supabase";

export function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello, {supabase.auth.user()?.phone}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })} />
    </View>
  );
}
