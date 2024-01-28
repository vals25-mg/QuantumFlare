import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import IonIcon from "@expo/vector-icons/Ionicons";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

export const AjoutAnnonce = ({ navigation }) => {
  const [nom, setNom] = useState("");
  const [annee, setAnnee] = useState("");
  const [prixVente, setPrixVente] = useState("");


  const [value, setValue] = useState(null);

  const nextFormular=()=>{
     navigation.navigate("AjoutImage")
  }
  return (
    <SafeAreaView className="flex-1 items-center " style={styles.containerSafe}>
      <View className="items-center mt-8">
        <View style={styles.header}>
          <Icon name="add-circle" size={30} color="#fff" />
          <Text style={styles.title} className="text-white">
            Ajout Annonce
          </Text>
        </View>
        <View className="">
          <Text style={styles.label} className="text-white">
            Marque:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNom(text)}
            value={nom}
            placeholder="Bentley, Ferrari, ..."
            placeholderTextColor="gray"
            className="text-white w-80"
            autoCapitalize="none"
          />

          <Text style={styles.label} className="text-white">
            Couleur de la voiture:
          </Text>
          <View style={styles.container2} className="text-white ">
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Choisisssez une couleur"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
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
            Modèle:
          </Text>
          <View style={styles.container2} className="text-white ">
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Choisisssez un modèle"
              searchPlaceholder="Search..."
              value={value}
              onChange={(item) => {
                setValue(item.value);
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
            onChangeText={
              (text) =>{
              let numericValue = text.replace(/[^0-9]/g, '');
              setAnnee(numericValue);}
            }
            value={annee}
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
              let numericValue = text.replace(/[^0-9.]/g, '');
              setPrixVente(numericValue);
            }}
            value={prixVente}
            placeholder=""
            placeholderTextColor="gray"
            className="text-white w-80"
          />

          <TouchableOpacity
          style={styles.button}
          onPress={nextFormular}
          >
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Set the background color for SafeAreaView
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
