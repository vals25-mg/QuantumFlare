import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { link } from "../backendconfig";

export const ListeAnnonces = () => {
  const [annonceData, setannonceData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userToken");
        const userData = JSON.parse(userDataString);
        const token = userData.token;

        if (token) {
          const response = await axios.get(`${link}/annonce/findAllAnnonceValide`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setannonceData(response.data.allAnnonces);
          console.log(JSON.stringify(response.data))
        } else {
          console.log("Token not found in AsyncStorage.");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {};
  }, [annonceData]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="items-start"
      onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}
    >
      <View
        style={styles.notificationItem}
        backgroundColor="#323232"
        className=" flex-row items-start "
      >
        <Image
          source={{ uri: item.detailsAnnonce.urls[0] }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText} className=" flex-1 w-56">
            {item.marque}
          </Text>
          <Text className="flex-auto w-56 text-slate-200">
            Prix: {item.prix} Ar
          </Text>
          <Text style={styles.notificationTime}>{item.date_annonce}</Text>
          {/* {item.status == 20 && (
            <Badge
              status="error"
              value="Vendu"
              containerStyle={{ position: "absolute", bottom: 5, right: 20 }}
            />
          )} */}
        </View>
      </View>
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
          keyExtractor={(item) => item.id_annonce}
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
      {selectedItem && (
        <DetailsAnnonce
          isVisible={modalVisible}
          onClose={() => {
            setSelectedItem(null);
            setModalVisible(false);  // Set modalVisible to false when the modal is closed
          }}
          selectedItem={selectedItem}
        />
      )}
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
    width: 350,
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
