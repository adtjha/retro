import * as React from "react";
import { Input, Icon, Button, Stack, HStack, Alert } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { supabase } from "../supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * hepler function.
 */

export const Login = ({ setIsLogin }) => {
  const [phone, setUser] = React.useState("");
  const [OTP, setOTP] = React.useState("");
  const [otpDisabled, setOTPDisabled] = React.useState(true);

  const format = ({ phone }) => {
    phone = "+91" + phone.toString();
    console.log(phone.match(/^\+[1-9]\d{1,14}$/g)[0]);
    return phone;
  };

  const sendOtp = async ({ phone }) => {
    phone = format({ phone });
    const { user, error } = await supabase.auth.signIn({
      phone: phone,
    });

    if (error) {
      console.error(error);
      return false;
    } else {
      console.log("OTP SENT ", user);
      return true;
    }
  };

  const verifyOtp = async ({ phone, OTP }) => {
    phone = format({ phone });
    const { session, error } = await supabase.auth.verifyOTP({
      phone: phone,
      token: OTP,
    });

    if (error) {
      console.error(error, {
        phone: phone,
        token: JSON.stringify(OTP),
      });
      return;
    } else {
      console.log(session);
      return;
    }
  };

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="perm-phone-msg" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        type="number"
        placeholder="Phone Number"
        value={phone}
        onChangeText={(e) => setUser(e)}
      />

      <Input
        isDisabled={otpDisabled}
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="message" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        InputRightElement={
          <Button
            variant="ghost"
            isDisabled={otpDisabled}
            onPress={() => sendOtp({ phone })}
          >
            Resend
          </Button>
        }
        placeholder="OTP"
        value={OTP}
        onChangeText={(e) => setOTP(e)}
      />

      <HStack space={3} alignItems="center">
        <Button variant="ghost" onPress={() => setIsLogin(false)}>
          Signup
        </Button>
        {otpDisabled ? (
          <Button
            onPress={() => {
              setOTPDisabled(false);
              sendOtp({ phone });
            }}
          >
            Send OTP
          </Button>
        ) : (
          <Button onPress={() => verifyOtp({ phone, OTP })}>login</Button>
        )}
      </HStack>
    </Stack>
  );
};
