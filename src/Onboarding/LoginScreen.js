import * as React from "react";
import { Center, NativeBaseProvider, Heading, Container } from "native-base";
import { Login } from "./Login";
import { Register } from "./Register";

export function LoginScreen({ navigation }) {
  const [isLogin, setIsLogin] = React.useState(true);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        {isLogin ? (
          <Container centerContent={true}>
            <Heading size="lg" fontSize={50} marginY="4">
              Login
            </Heading>
          </Container>
        ) : (
          ""
        )}

        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </Center>
    </NativeBaseProvider>
  );
}
