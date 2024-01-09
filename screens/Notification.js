import { SafeAreaView } from "moti";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const Notification = () => {
  const notificationsData = [
    { id: "1", text: "John liked your post.", time: "2h ago" },
    { id: "2", text: "Jane commented on your photo.", time: "4h ago" },
    { id: "3", text: "Mark mentioned you in a comment.", time: "6h ago" },
    { id: "4", text: "John liked your post.", time: "2h ago" },
    { id: "5", text: "Jane commented on your photo. Mark mentioned you in a comment.", time: "4h ago" },
    { id: "6", text: "Mark mentioned you in a comment.", time: "6h ago" },
    { id: "7", text: "John liked your post.", time: "2h ago" },
    { id: "8", text: "Jane commented on your photo.", time: "4h ago" },
    { id: "9", text: "Mark mentioned you in a comment.", time: "6h ago" },
    // Add more dummy notifications as needed
  ];

  const renderItem = ({ item }) => (
    <View className="items-start" >
      <View style={styles.notificationItem} backgroundColor="#323232" className=" flex-row items-start w-full">
        <Icon name="person-circle-outline" size={50} color="#4267B2" />
        <View style={styles.notificationTextContainer}>
          <Text style={styles.notificationText} className="flex-auto">{item.text}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 items-center bg-neutral-900">
      <View className="items-center">
        <View style={styles.header}>
          <Icon name="notifications" size={30} color="#fff" />
          <Text style={styles.title} className="text-white">
            Notifications
          </Text>
        </View>
      </View>
      <View className="mt-5">
        <FlatList
          data={notificationsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          //   contentContainerStyle={styles.notificationList}
        />
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
  notificationList: {
    // flexGrow: 1,
    // padding: 5,
    backgroundColor: "#323232",
  },
  notificationItem: {


    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  notificationTextContainer: {
    marginLeft: 40,
  },
  notificationText: {
    color: "#FFF",
    fontSize: 16,
  },
  notificationTime: {
    color: "#A9A9A9",
    fontSize: 14,
    marginTop: 4,
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
});
