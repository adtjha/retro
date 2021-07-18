import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { homeScreen } from "./screens/homeScreen";
import { activityScreen } from "./screens/activityScreen";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Activity" component={activityScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
