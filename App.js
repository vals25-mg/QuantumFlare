// In App.js in a new project

import * as React from "react";
import { View, Text, StatusBar, Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens/Login";

function HomeScreen({navigation}) {

  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      <View className="flex-row justify-center items-center space-x-2">
        <Text className="text-xl text-white">Home </Text>
      </View>
      <Text className="mx-4 text-justify text-white mt-4"
        onPress={()=>navigation.navigate("Login")}
      >
          Login
      </Text>
      <Text className="mx-4 text-justify text-white mt-4">
          Sign Up
      </Text>
      <StatusBar style="dark-content" />
    </View>
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
          component={HomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
