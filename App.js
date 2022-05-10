import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/HomeScreen";
import { ProfileScreen } from "./src/ProfileScreen";
import { LoginScreen } from "./src/Onboarding/LoginScreen";
import { supabase } from "./src/supabase";

const Stack = createNativeStackNavigator();

function App() {
  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setAuth(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      setAuth(session);
    });
  });

  return (
    <NavigationContainer>
      {/* {auth ? <HomeScreen /> : <LoginScreen />} */}
      <HomeScreen />
    </NavigationContainer>
  );
}

export default App;
