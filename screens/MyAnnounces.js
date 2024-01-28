import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";



const MyAnnounces = ({navigation}) => {

  const navigateAjoutAnnonce=()=>{
      navigation.navigate("AjoutAnnonce");
  }

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
      </SafeAreaView>
  )
}

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
})
