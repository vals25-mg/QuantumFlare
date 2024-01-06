import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native';

export const Signup = () => {
    return (
        <View className="flex-1 items-center justify-center dark:bg-neutral-900">
          <View className="flex-row justify-center items-center">
            <Text className="text-xl text-white">Sign Up </Text>
          </View>
          <StatusBar style="dark-content" />
        </View>
      );
}
