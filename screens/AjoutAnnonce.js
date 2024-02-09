import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import IonIcon from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { link } from "../backendconfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AjoutAnnonce = ({ navigation }) => {
  const [data_marque, setData_marque] = useState([
    { nom: "Item 1", id_marque: "1" },
    { nom: "Item 2", id_marque: "2" },
  ]);

  const [data_couleur, setData_couleur] = useState([
    { nom: "Item 1", id_Couleur: "1" },
    { nom: "Item 2", id_Couleur: "2" },
  ]);

  const [data_categorie, setData_categorie] = useState([
    { nom: "Item 1", id_Categorie: "1" },
    { nom: "Item 2", id_Categorie: "2" },
  ]);

  const [data_moteur, setData_moteur] = useState([
    { nom: "Item 1", id_moteur: "1" },
    { nom: "Item 2", id_moteur: "2" },
  ]);

  const [data_transmission, setData_transmission] = useState([
    { nom: "Item 1", id_transmission: "1" },
    { nom: "Item 2", id_transmission: "2" },
  ]);

  const [data_carburant, setData_carburant] = useState([
    { nom: "Item 1", id_Carburant: "1" },
    { nom: "Item 2", id_Carburant: "2" },
  ]);

  const [data_modele, setData_modele] = useState([
    { nom: "Item 1", id_model: "1" },
    { nom: "Item 2", id_model: "2" },
  ]);

  const [id_marque, setId_marque] = useState("");
  const [id_modeles, setId_modeles] = useState("");
  const [id_couleur, setId_couleur] = useState("");
  const [id_categorie, setId_categorie] = useState("");
  const [id_moteur, setId_moteur] = useState("");
  const [id_transmission, setId_transmission] = useState("");
  const [id_carburant, setId_carburant] = useState("");
  const [conso, setConso] = useState("");
  const [kilometrage, setKilometrage] = useState("");
  const [nbr_porte, setNbr_porte] = useState("");
  const [nbr_place, setNbr_place] = useState("");
  const [annee, setAnnee] = useState("");
  const [prix, setPrixVente] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userToken");
        const userData = JSON.parse(userDataString);
        const token = userData.token;

        if (token) {
          const response = await axios.get(`${link}/addAnnonce/finAll`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(`${link}/addAnnonce/finAll`);
          console.log(response.data)
          setData_marque(response.data.marque);
          setData_carburant(response.data.carburant);
          setData_categorie(response.data.categorie);
          setData_couleur(response.data.couleur);
          setData_modele(response.data.model);
          setData_transmission(response.data.transmission);
          setData_moteur(response.data.moteur);
        } else {
          console.log("Token not found in AsyncStorage.");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);
  // data_marque,data_carburant,data_categorie,data_couleur,data_modele, data_modele, data_transmission

  const nextFormular = () => {
    navigation.navigate("AjoutImage", {
      id_marque: id_marque,
      id_modeles: id_modeles,
      id_couleur: id_couleur,
      id_categorie: id_categorie,
      id_moteur: id_moteur,
      id_transmission: id_transmission,
      id_carburant: id_carburant,
      conso: conso,
      kilometrage: kilometrage,
      nbr_porte: nbr_porte,
      nbr_place: nbr_place,
      annee: annee,
      prix: prix,
      description: description,
      etat:0
    });
  };
  return (
    <SafeAreaView className="flex-1 items-center " style={styles.containerSafe}>
      <View style={styles.header} className="mt-20">
        <Icon name="add-circle" size={30} color="#fff" />
        <Text style={styles.title} className="text-white">
          Ajout Annonce
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center ">
          <View className="">
            <Text style={styles.label} className="text-white">
              Marque de la voiture:
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_marque}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_marque"
                placeholder="Choisisssez une marque"
                searchPlaceholder="Chercher..."
                value={id_marque}
                onChange={(item) => {
                  setId_marque(item.id_marque);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="car-sport-outline"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Couleur :
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_couleur}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_Couleur"
                placeholder="Choisisssez une couleur"
                searchPlaceholder="Chercher..."
                value={id_couleur}
                onChange={(item) => {
                  setId_couleur(item.id_Couleur);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="color-palette"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Catégorie :
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_categorie}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_Categorie"
                placeholder="Choisisssez une catégorie"
                searchPlaceholder="Chercher..."
                value={id_categorie}
                onChange={(item) => {
                  setId_categorie(item.id_Categorie);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="apps-outline"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Moteur :
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_moteur}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_moteur"
                placeholder="Choisisssez un moteur"
                searchPlaceholder="Chercher..."
                value={id_moteur}
                onChange={(item) => {
                  setId_moteur(item.id_moteur);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="settings-outline"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Transmission :
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_transmission}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_transmission"
                placeholder="Choisisssez une transimission"
                searchPlaceholder="Chercher..."
                value={id_transmission}
                onChange={(item) => {
                  setId_transmission(item.id_transmission);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="pin-outline"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Carburant :
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_carburant}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_Carburant"
                placeholder="Choisisssez un carburant"
                searchPlaceholder="Chercher..."
                value={id_carburant}
                onChange={(item) => {
                  setId_carburant(item.id_Carburant);
                }}
                renderLeftIcon={() => (
                  <IonIcon
                    style={styles.icon}
                    color="white"
                    name="battery-charging-outline"
                    size={20}
                  />
                )}
              />
            </View>
            <Text style={styles.label} className="text-white">
              Modèle:
            </Text>
            <View style={styles.container2} className="text-white ">
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data_modele}
                search
                maxHeight={300}
                labelField="nom"
                valueField="id_model"
                placeholder="Choisisssez un modèle"
                searchPlaceholder="Chercher..."
                value={id_modeles}
                onChange={(item) => {
                  setId_modeles(item.id_model);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color="white"
                    name="car"
                    size={20}
                  />
                )}
              />
            </View>

            <Text style={styles.label} className="text-white">
              Année de sortie:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9]/g, "");
                setAnnee(numericValue);
              }}
              value={annee}
              placeholder=""
              placeholderTextColor="gray"
              keyboardType="numeric"
              className="text-white w-80"
            />

            <Text style={styles.label} className="text-white">
              Nombre de places:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9]/g, "");
                setNbr_place(numericValue);
              }}
              value={nbr_place}
              placeholder=""
              placeholderTextColor="gray"
              keyboardType="numeric"
              className="text-white w-80"
            />

            <Text style={styles.label} className="text-white">
              Nombre de portes:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9]/g, "");
                setNbr_porte(numericValue);
              }}
              value={nbr_porte}
              placeholder=""
              placeholderTextColor="gray"
              keyboardType="numeric"
              className="text-white w-80"
            />
            <Text style={styles.label} className="text-white">
              Prix de vente:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9.]/g, "");
                // Check if the decimal point is the first character, if yes, remove it
                if (numericValue.indexOf(".") === 0) {
                  numericValue = numericValue.substr(1);
                }

                // Check if there are multiple decimal points, if yes, keep only the first one
                const decimalIndex = numericValue.indexOf(".");
                if (decimalIndex !== -1) {
                  numericValue =
                    numericValue.substr(0, decimalIndex + 1) +
                    numericValue.substr(decimalIndex + 1).replace(".", "");
                }
                setPrixVente(numericValue);
              }}
              value={prix}
              placeholder=""
              placeholderTextColor="gray"
              className="text-white w-80"
            />

            <Text style={styles.label} className="text-white">
              Kilometrage:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9.]/g, "");
                // Check if the decimal point is the first character, if yes, remove it
                if (numericValue.indexOf(".") === 0) {
                  numericValue = numericValue.substr(1);
                }

                // Check if there are multiple decimal points, if yes, keep only the first one
                const decimalIndex = numericValue.indexOf(".");
                if (decimalIndex !== -1) {
                  numericValue =
                    numericValue.substr(0, decimalIndex + 1) +
                    numericValue.substr(decimalIndex + 1).replace(".", "");
                }
                setKilometrage(numericValue);
              }}
              value={kilometrage}
              placeholder=""
              placeholderTextColor="gray"
              className="text-white w-80"
            />

            <Text style={styles.label} className="text-white">
              Consommation (L/100 km):
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                let numericValue = text.replace(/[^0-9.]/g, "");
                // Check if the decimal point is the first character, if yes, remove it
                if (numericValue.indexOf(".") === 0) {
                  numericValue = numericValue.substr(1);
                }

                // Check if there are multiple decimal points, if yes, keep only the first one
                const decimalIndex = numericValue.indexOf(".");
                if (decimalIndex !== -1) {
                  numericValue =
                    numericValue.substr(0, decimalIndex + 1) +
                    numericValue.substr(decimalIndex + 1).replace(".", "");
                }
                setConso(numericValue);
              }}
              value={conso}
              placeholder=""
              placeholderTextColor="gray"
              className="text-white w-80"
            />

            <Text style={styles.label} className="text-white">
              Description:
            </Text>
            <TextInput
              style={styles.description}
              onChangeText={(text) => setDescription(text)}
              value={description}
              placeholder="Entrez une description"
              placeholderTextColor="gray"
              className="text-white w-80 "
              numberOfLines={4} // Définissez le nombre de lignes souhaité
              editable
              multiline
            />

            <TouchableOpacity style={styles.button} onPress={nextFormular}>
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-slate-500"
              style={styles.buttonRevenir}
              onPress={() => navigation.navigate("Annonce")}
            >
              <Text style={styles.buttonText}>Revenir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Set the background color for SafeAreaView
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 10,
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
  description: {
    height: 60,
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
