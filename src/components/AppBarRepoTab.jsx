import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import React from "react";

const AppBarRepoTab = () => {
  return (
    <View>
      <Text style={styles.text}>Repositories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: "black",
    opacity: 0.7,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
  },
});

export default AppBarRepoTab;
