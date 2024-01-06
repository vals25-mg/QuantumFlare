import React from "react";
import { Text, View, StatusBar } from "react-native";

export const Login = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <View className="flex-row justify-center items-center">
        <Text className="text-xl text-white">Login </Text>
      </View>
      <Text
        className="mx-4 text-justify text-white mt-4"
        onPress={()=>navigation.navigate("Home")}
      >
        Go Back
      </Text>
      <StatusBar style="dark-content" />
    </View>
  );
};
