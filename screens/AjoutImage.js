import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native";
import { firebase } from "../config";
import { link } from "../backendconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// import * as FileSystem from "expo-file-system";

export const AjoutImage = ({ route, navigation }) => {
  const {
    userData,
    id_marque,
    id_modeles,
    id_couleur,
    id_categorie,
    id_moteur,
    id_transmission,
    id_carburant,
    conso,
    kilometrage,
    nbr_porte,
    nbr_place,
    annee,
    prixVente,
    description,
  } = route.params;
  // console.log(route.params);
  const [images, setImages] = useState(null);

  // Data test
  // {"annee": "2004", "conso": "2", "description": "Milay Be", "id_carburant": 1, "id_categorie": 1, "id_couleur": 2, "id_marque": 3, "id_modeles": 3, "id_moteur": 1, "id_transmission": 3, "kilometrage": "100", "nbr_place": "5", "nbr_porte": "4", "prixVente": "10000000"}
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    // console.log(result.assets[0]);

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const uploadImages = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("userToken");
      console.log("userDataString: "+userDataString)
      const userData = JSON.parse(userDataString);
      console.log("userData.email: "+userData.email)
      // Step 1: Fetching iduser
      const userResponse = await axios.get(
        `${link}/api/v1/auth/findUserByEmail/${userData.email}`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      const iduser = userResponse.data.id_User;
      console.log("iduser: " + JSON.stringify(userResponse.data))
      // Step 2: Inserting iduser and route.params into link to get idannonce
      const data = {
        ...route.params,
        id_user: iduser
      };
      console.log(JSON.stringify(data))
      const annonceResponse = await axios.post(
        `${link}/annonce/save`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      console.log("annonceResponse.data = " + JSON.stringify(annonceResponse.data));
      const idannonce = annonceResponse.data.id_annonce;
        console.log("annonceResponse.data: " + JSON.stringify(annonceResponse.data));
        console.log("idannonce: " + idannonce);
      // Uploading images
      const urls = [];
      if (images) {
        for (let img of images) {
          const uri = img.uri;
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
              resolve(xhr.response);
            };
            xhr.onerror = (e) => {
              reject(new TypeError("Networking error"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
          });

          const filename = uri.substring(uri.lastIndexOf("/") + 1);
          const ref = firebase.storage().ref().child(filename);

          await ref.put(blob);
          const downloadUrl = await ref.getDownloadURL();
          urls.push(downloadUrl);
        }

      //   // Step 4: Sending URLs and idannonce to the server
        const saveImagesResponse = await axios.post(
          `${link}/annonce/saveDetailsAnnonce`,
          { "id_annonce":idannonce, "urls": urls },
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );
        console.log(JSON.stringify(saveImagesResponse.data));
        Alert.alert("Annonces Ajouter!");
        navigation.navigate("Annonce");
      } else {
        Alert.alert("No images to upload!");
      }
    } catch (error) {
      Alert.alert("Error uploading photos:", error.message);
      console.log("Error uploading photos:", error);
    } finally {
      setImages(null); // Reset images state regardless of success or failure
    }
  };
  return (
    <SafeAreaView className="flex-1 items-center " style={styles.containerSafe}>
      <View className="items-center mt-20">
        <View style={styles.header}>
          <Icon name="add-circle" size={30} color="#fff" />
          <Text style={styles.title} className="text-white">
            Ajout Image
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            title="Choisissez les images correspondantes dans la galerie"
            onPress={pickImage}
          />
          <View className="flex-row flex-wrap justify-around">
            {images &&
              images.map((img) => (
                <View key={img.uri} style={{ position: "relative" }}>
                  <Image
                    key={img.uri}
                    source={{ uri: "data:image/jpeg;base64," + img.base64 }}
                    style={{ width: 100, height: 100, margin: 5 }}
                  />
                  <TouchableOpacity
                    style={{ position: "absolute", top: 0, right: 0 }}
                    onPress={() => {
                      const newImages = [...images];
                      newImages.splice(img.assetId, 1);
                      setImages(newImages);
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "gray",
                        borderRadius: 50,
                        padding: 1,
                      }}
                    >
                      <Icon name="close" size={30} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        {images && (
          <TouchableOpacity style={styles.button} onPress={uploadImages}>
            <Text style={styles.buttonText}>Insérer</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          className="bg-slate-500"
          style={styles.buttonRevenir}
          onPress={() => navigation.navigate("AjoutAnnonce")}
        >
          <Text style={styles.buttonText}>Revenir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
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
    marginTop: 10,
  },

  buttonRevenir: {
    // backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  container2: {
    // margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    // backgroundColor: 'black',
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
