import * as React from "react";
import {
  Input,
  Icon,
  Button,
  Stack,
  HStack,
  Heading,
  Container,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export const Register = ({ setIsLogin }) => {
  const [show, setShow] = React.useState(false);
  const [username, setUser] = React.useState("");
  const [password, setPass] = React.useState("");

  return (
    <Stack space={4} w="100%" marginY="8" alignItems="center">
      <Container>
        <Heading>
          Registerations are
          <Heading color="red.500"> closed currently.</Heading>
        </Heading>
        <Text mt="3" fontWeight="medium">
          Invites are the only option to get on the platform. Find a friend,
          who's already on it, or get yourself an invite from a stranger.
        </Text>
      </Container>
      <HStack space={3} alignItems="center">
        <Button variant="subtle" onPress={() => setIsLogin(true)}>
          Login
        </Button>
      </HStack>
    </Stack>
  );
};
