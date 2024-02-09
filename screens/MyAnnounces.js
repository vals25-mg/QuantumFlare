import React, { useState } from "react";
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
import Icon from "react-native-vector-icons/MaterialIcons";
import DetailsAnnonce from "./DetailsAnnonce";
import { Badge } from "@rneui/themed";
import { Modal } from "react-native-paper";

const MyAnnounces = ({ navigation }) => {
  const [annonceData, setannonceData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [optionVisible, setoptionVisible] = useState(false);

  const options = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={optionVisible}
    >
      <View>
      <TouchableOpacity style={styles.closeButton} onPress={()=>closeOptions}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Modifier Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Voir Details
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const showDetails = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const showOptions = () => {
    setoptionVisible(true);
  };

  const closeOptions = () => {
    setoptionVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="items-start"
      onPress={() => {
        showOptions();
      }}
    >
      <View
        style={styles.notificationItem}
        backgroundColor="#323232"
        className=" flex-row items-start "
      >
        <Image
          source={{ uri: item.images[0] }}
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
          {item.status == 1 ? (
            <Badge
              status="error"
              value="Vendu"
              containerStyle={{ position: "absolute", bottom: 5, right: 20 }}
            />
          ) : (
            <Badge
              status="success"
              value="A vendre"
              containerStyle={{ position: "absolute", bottom: 5, right: 10 }}
            />
          )}
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

  const navigateAjoutAnnonce = () => {
    navigation.navigate("AjoutAnnonce");
  };

  return (
    <SafeAreaView className="flex-1 items-center " style={styles.containerSafe}>
      <View className="items-center mt-8">
        <View style={styles.header}>
          <Icon name="filter-list" size={30} color="#fff" />
          <Text style={styles.title} className="text-white">
            Mes Annonces
          </Text>
          <TouchableOpacity className="ml-20" onPress={navigateAjoutAnnonce}>
            <Icon name="add-circle" size={40} color="#fff" className="" />
          </TouchableOpacity>
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
      {selectedItem && (
        <DetailsAnnonce
          isVisible={modalVisible}
          onClose={() => {
            setSelectedItem(null);
            setModalVisible(false); // Set modalVisible to false when the modal is closed
          }}
          selectedItem={selectedItem}
        />
      )}
    </SafeAreaView>
  );
};

export default MyAnnounces;

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
  container3: {
    backgroundColor: "#fff", // Add a background color for FlatList
    padding: 10,
  },
});
