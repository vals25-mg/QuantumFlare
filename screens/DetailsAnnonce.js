import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsAnnonce = ({ isVisible, onClose }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close icon at the top right */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="black" />
          </TouchableOpacity>
 
          {/* Your modal content goes here */}
          <Text>Your Modal Content</Text>
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
    padding: 20,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default DetailsAnnonce;
