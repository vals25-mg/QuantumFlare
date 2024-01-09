import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Profile = ({ navigation }) => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    navigation.navigate("Login");
    // You can add additional logic like clearing user data, navigating to login screen, etc.
  };

  const handleConfidentiality = () => {
    // Add your confidentiality logic here
    console.log("Viewing confidentiality settings...");
    // You can navigate to a confidentiality settings screen or show a modal, etc.
  };

  return (
    <SafeAreaView className="flex-1  bg-neutral-900">
      <View style={styles.container}>
        <View className="items-center">
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
              <Text style={styles.circleText}>V</Text>
            </View>
            <Text style={styles.text} className="text-xl">Vals</Text>
          </View>
        </View>


        <TouchableOpacity
          style={styles.parameter}
          onPress={handleConfidentiality}
        >
          <Icon name="lock" size={20} color="#333" />
          <Text style={styles.parameterText}>Confidentialité</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.parameter} onPress={handleLogout}>
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
