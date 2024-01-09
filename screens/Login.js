import React, { useState } from "react";
import { Text, View, StatusBar,SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate("HomeScreen");
    // You can add your authentication logic here
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-neutral-900">
      <Text className="text-3xl text-white">Connexion </Text>
      <View className="mt-52">
      {/*
      <Text
      className="mx-4 text-justify text-white mt-4"
      onPress={()=>navigation.navigate("Home")}
      >
      Go Back
    </Text> */}
      <Text style={styles.label} className="text-white">Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Entrez votre email"
        placeholderTextColor="gray"
        className="text-white w-80"
        autoCapitalize={false}
        />

      <Text style={styles.label} className="text-white">Mot de passe:</Text>
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
      <Text  className="text-white mt-3 text">Pas de compte?&nbsp;
          <Text
          className="text-blue-400 underline"
          onPress={()=>navigation.navigate("SignUp")}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    // width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

