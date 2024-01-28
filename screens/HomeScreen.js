import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ListeAnnonces } from "./ListeAnnonces";
import { ModificationStatus } from "./ModificationStatus";
import { Profile } from "./Profile";
import { Notification } from "./Notification";
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyAnnounces from "./MyAnnounces";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="ListeAnnonces"
      screenOptions={{
        tabBarStyle: {  backgroundColor: "#000" },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        // tabBarBackground: "black",
      }}
    >
      <Tab.Screen
        name="ListeAnnonces"
        options={{
          headerShown: false,
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home"  color={color} size={size} />
          ),

        }}
        component={ListeAnnonces}
      />
      <Tab.Screen
        name="Annonce"
        options={{
            headerShown: false,
            tabBarLabel: "Mes Annonces",
            tabBarIcon: ({ color, size }) => (
                <Icon name="list"  color={color} size={size} />
              ),
          }}
        component={MyAnnounces}
      />
      <Tab.Screen
        name="Notification"
        options={{
            headerShown: false,
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
                <Icon name="notifications"  color={color} size={size} />
              ),
          }}
        component={Notification}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profil',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person"  color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
