import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { link } from "../backendconfig";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Signup = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubscribe = async () => {
    try {
      // Send the login request to the server
      const inputs= {
        "nom" : nom,
        "prenom" : prenom,
        "email": email,
        "mdp": password,
        "telephone": telephone
      }
      const response = await axios.post(`${link}/api/v1/auth/register`, inputs);

      // Assuming the server returns a token in the response
      const token = response.data.status.body.token;

      console.log('token: '+token)
      const dataUsers={
        "email":email,
        "token":token
    }
      // Store the token in AsyncStorage
      await AsyncStorage.setItem('userToken', JSON.stringify(dataUsers));

      // Navigate to the home screen or perform any other actions after successful login
      navigation.navigate('HomeScreen');
    } catch (error) {
      // Handle login error here
      console.log('Login error:', error.message);
      Alert.alert("Inscription Invalide");
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-neutral-900">
      <View className=" mt-16 ">
        <Image
          source={require("../assets/415036444_392514570015565_8214189076379889795_n.png")}
          style={{ width: 200, height: 100, margin: 5 }}
        />
        <Text className="text-3xl text-white text-center">Inscription </Text>
      </View>
      <View className="">
        {/*
      <Text
      className="mx-4 text-justify text-white mt-4"
      onPress={()=>navigation.navigate("Home")}
      >
      Go Back
    </Text> */}
        <Text style={styles.label} className="text-white">
          Nom:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNom(text)}
          value={nom}
          placeholder="Entrez votre nom"
          placeholderTextColor="gray"
          className="text-white w-80"
          autoCapitalize="none"
        />
        <Text style={styles.label} className="text-white">
          Prénom:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPrenom(text)}
          value={prenom}
          placeholder="Entrez votre prénom"
          placeholderTextColor="gray"
          className="text-white w-80"
          autoCapitalize="none"
        />
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

        <Text style={styles.label} className="text-white">
          Téléphone:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelephone(text)}
          value={telephone}
          placeholder="03* ** *** **"
          placeholderTextColor="gray"
          className="text-white w-80"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <Text className="text-white mt-3 text">
          J'ai déja un compte!&nbsp;
          <Text
            className="text-blue-400 underline"
            onPress={() => navigation.navigate("Login")}
          >
            Se connecter
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
