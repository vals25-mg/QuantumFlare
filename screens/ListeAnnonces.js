import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Badge } from "@rneui/themed";
import DetailsAnnonce from "./DetailsAnnonce";

export const ListeAnnonces = () => {
  const annonceData = [
    {
      id: "1",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Bentley",
      time: "il y a 2h",
    },
    {
      id: "2",
      status:"1",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Wolkswagen, Golf Type 4 moteur essesnce",
      time: "il y a 4h",
    },
    {
      id: "3",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Subaru",
      time: "il y a 6h",
    },
    {
      id: "4",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Peugeot",
      time: "il y a 2h",
    },
    {
      id: "5",
      status:"1",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "GMC",
      time: "il y a 4h",
    },
    {
      id: "6",
      status:"1",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Mercedes",
      time: "il y a 6h",
    },
    {
      id: "7",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Toyota",
      time: "il y a 2h",
    },
    {
      id: "8",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Tesla",
      time: "il y a 4h",
    },
    {
      id: "9",
      status:"0",
      image:
        "https://images.caradisiac.com/images/4/3/8/8/204388/S0-les-voitures-neuves-sont-de-plus-en-plus-cheres-et-ce-n-est-pas-une-surprise-770216.jpg",
      prix: 300000000,
      marque: "Suzuki",
      time: "il y a 6h",
    },
    // Add more dummy notifications as needed
  ];

  const [modalVisible, setModalVisible] = useState(false);


  const renderItem = ({ item }) => (
    <TouchableOpacity className="items-start" onPress={() => setModalVisible(true)}>
      <View
        style={styles.notificationItem}
        backgroundColor="#323232"
        className=" flex-row items-start w-full"
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText} className=" flex-1 w-56">
            {item.marque}
          </Text>
          <Text className="flex-auto w-56 text-slate-200">
            Prix: {item.prix} Ar
          </Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
          {item.status==1 && (
            <Badge status="error" value="Vendu" containerStyle={{ position: 'absolute', bottom: 5, right: 30 }}/>
          )}
        </View>
      </View>
      <DetailsAnnonce isVisible={modalVisible} onClose={() => setModalVisible(false)}/>
    </TouchableOpacity>
  );

  const [refreshing, setRefreshing] = useState(false);
  const [status, setStatus] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    console.log("Refreshing");
    setTimeout(() => {
      setRefreshing(false);
      setStatus(true);
    }, 2000);
    setStatus(false);
    // setRefresh(true);
  };

  return (
    <SafeAreaView className="flex-1 items-center " style={styles.containerSafe}>
      <View className="items-center mt-8">
        <View style={styles.header}>
          <Icon name="home" size={30} color="#fff" />
          <Text style={styles.title} className="text-white">
            Accueil
          </Text>
        </View>
      </View>
      <View className="mt-5 ">
        <FlatList
          data={annonceData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              // colors={["#transparent"]}
              style={{ tintColor: "white" }}
            />
          }
          style={styles.container}
          showsVerticalScrollIndicator={false}
        />
        <View className="mt-16"></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1E1E1E",
    // padding: 5,
  },
  containerSafe: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Set the background color for SafeAreaView
    padding: 10,
  },
  notificationList: {
    // flexGrow: 1,
    // padding: 5,
    backgroundColor: "#323232",
  },
  notificationItem: {
    borderRadius: 8,
    padding: 5,
    width: 330,
    marginBottom: 12,
  },
  notificationTextContainer: {
    marginLeft: 20,
  },
  notificationText: {
    color: "#FFF",
    // fontSize: 16,
  },
  notificationTime: {
    color: "#A9A9A9",
    // fontSize: 14,
    marginTop: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container3: {
    backgroundColor: "#fff", // Add a background color for FlatList
    padding: 10,
  },
});
