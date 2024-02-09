import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { link } from "../backendconfig";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Send the login request to the server
      const inputs= {
        "email": email,
        "mdp": password
      }
      console.log(inputs)
      const response = await axios.post(`${link}/api/v1/auth/authenticate`, inputs);

      // Assuming the server returns a token in the response
      const token = response.data.token;

      console.log(token)
      const dataUsers={
          "email":email,
          "token":token
      }
      console.log(dataUsers)
      // Store the token in AsyncStorage
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.setItem('userToken', JSON.stringify(dataUsers));
      // Navigate to the home screen or perform any other actions after successful login

      navigation.navigate('HomeScreen');
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle login error here
      console.log('Login error:', error.message);
      Alert.alert("Email ou Mot de passe incorrect");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-neutral-900">
      <View className="mt-40">
        <Image
          source={require('../assets/415036444_392514570015565_8214189076379889795_n.png')}
          style={{ width: 200, height: 100, margin: 5 }}
        />
        <Text className="text-3xl text-white text-center">Connexion </Text>
      </View>
      <View className="">

        <Text style={styles.label} className="text-white">
          Email:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Entrez votre email"
          placeholderTextColor="gray"
          className="text-white w-80"
          autoCapitalize="none"
        />

        <Text style={styles.label} className="text-white">
          Mot de passe:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Entrez votre mot de passe"
          placeholderTextColor="gray"
          secureTextEntry={true}
          className="text-white w-80"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <Text className="text-white mt-3 text">
          Pas de compte?&nbsp;
          <Text
            className="text-blue-400 underline"
            onPress={() => navigation.navigate("SignUp")}
          >
            S'inscrire
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    // width: '100%',
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
