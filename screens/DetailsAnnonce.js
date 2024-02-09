import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SliderBox } from "react-native-image-slider-box";

const DetailsAnnonce = ({ isVisible, onClose, selectedItem }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      key={selectedItem.id}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close icon at the top right */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text className="text-2xl text-center mt-5">Details</Text>
          <View className="mt-5 w-auto">
            <SliderBox
              images={selectedItem.detailsAnnonce.urls}
              sliderBoxHeight={380}
              // onCurrentImagePressed={(index) =>
              //   console.warn(`image ${index} pressed`)
              // }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              resizeMethod={"resize"}
              resizeMode={"cover"}
              paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)",
              }}
              ImageComponentStyle={{
                borderRadius: 15,
                width: "97%",
                marginTop: 5,
              }}
              imageLoadingColor="#2196F3"
              parentWidth={350}
            />
          </View>
          <View className="mt-5 px-5">
            <Text>
              <Text className="text-opacity-95 text-lg">Marque: </Text>
              {selectedItem.marque} {selectedItem.modeles}
              {selectedItem.categorie} {selectedItem.moteur}
            </Text>
            <Text>
              <Text className="text-opacity-95 text-lg">Prix: </Text>
              {selectedItem.prix} Ar
            </Text>
            <View className="flex-auto ">
              <Text className="text-opacity-95 text-lg">Description: </Text>
              <Text>{selectedItem.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
  },
  modalContent: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default DetailsAnnonce;
