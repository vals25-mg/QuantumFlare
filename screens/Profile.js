import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Notifications from "expo-notifications";
import Icon from "react-native-vector-icons/MaterialIcons";

Notifications.setNotificationHandler({
  handLeNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userToken");
        console.log("userDataString:", userDataString);
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          console.log("userData:", userData);
          setUserData(userData);
        }
      } catch (error) {
        console.log("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Remove the token from AsyncStorage
      console.log("logout");
      await AsyncStorage.removeItem("userToken");
      const userDataString = await AsyncStorage.getItem("userToken");
      console.log("userDataString:", userDataString);
      // Navigate to the login screen
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error logging out:", error.message);
      // Handle error, if any
    }
  };

  const handleConfidentiality = () => {
    console.log("Viewing confidentiality settings...");
  };

  return (
    <SafeAreaView className="flex-1  bg-neutral-900">
      <View style={styles.container} className="mt-12">
        <View className="items-center ">
          <View style={styles.header}>
            <Icon name="person" size={30} color="#fff" />
            <Text style={styles.title} className="text-white">
              Profile
            </Text>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.rowContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>
                {userData && userData.email
                  ? userData.email.charAt(0).toUpperCase()
                  : ""}
              </Text>
            </View>
            {userData && userData.email && (
              <Text style={styles.text} className="text-xl">
                {userData.email}
              </Text>
            )}
          </View>
        </View>

        {/* <TouchableOpacity
          style={styles.parameter}
          onPress={handleConfidentiality}
        >
          <Icon name="lock" size={20} color="#333" />
          <Text style={styles.parameterText}>Confidentialité</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={styles.parameter}
          className="mt-10"
          onPress={handleLogout}
        >
          <Icon name="exit-to-app" size={20} color="#333" />
          <Text style={styles.parameterText}>Se Deconnecter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  parameter: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  parameterText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container2: {
    alignItems: "flex-start",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#3498db",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  circleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    marginLeft: 10, // Add some spacing between the circle and the text
    marginTop: 20, // Adjust the marginTop based on your design
  },
});
