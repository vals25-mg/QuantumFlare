import { SafeAreaView } from 'moti'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export const ListeAnnonces = () => {
    const profilesData = [
        { id: '1', name: 'LAND CRUISER 300', marque: 'Toyota', prix: 2000000000 },
        { id: '2', name: 'GOLF GTI', marque: 'Volkswagen', prix: 2000000000 },
        // Add more profiles as needed
      ];

      const renderProfileItem = ({ item }) => (
        <View style={styles.profileItem} >
          <Text style={styles.name}>{item.name}</Text>
          <Text>Marque: {item.marque}</Text>
          <Text>Prix: {item.prix}</Text>
        </View>
      );


  return (
    <SafeAreaView className="flex-1 items-center bg-neutral-900">
        <Text className="text-white text-base">Accueil</Text>
        <View style={styles.container}>
      <FlatList
        data={profilesData}
        keyExtractor={(item) => item.id}
        renderItem={renderProfileItem}
      />
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    profileItem: {
      backgroundColor: '#ececec',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });


