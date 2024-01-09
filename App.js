// In App.js in a new project

import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  Switch,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { MotiView } from "moti";
import { HomeScreen } from "./screens/HomeScreen";

export const FadeIn = ({ navigation }) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: "timing",
      }}
      style={styles.shape}
    />
  );
};

export function HelloWorld() {
  const [visible, toggle] = React.useReducer((s) => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <FadeIn />}
    </Pressable>
  );
}

function Home({ navigation }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-neutral-900">
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl text-white">Home </Text>
      </View>
      <Text
        className="mx-4 text-justify text-white mt-4"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Text>
      <Text
        className="mx-4 text-justify text-white mt-4"
        onPress={() => navigation.navigate("SignUp")}
      >
        Sign Up
      </Text>
      <Text
        className="mx-4 text-justify text-white mt-4"
        onPress={() => navigation.navigate("FadeIn")}
      >
        Fade in
      </Text>
      {/* <StatusBar barStyle="light-content"  /> */}
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />

        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={Signup}
        />
        <Stack.Screen
          name="FadeIn"
          options={{ headerShown: false }}
          component={HelloWorld}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});

export default App;
