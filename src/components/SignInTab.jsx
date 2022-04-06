import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import React from "react";
import { Link } from "react-router-native";

const SignInTab = () => {
  return (
    <View>
      <TouchableHighlight>
        <Link to="/signin">
          <Text style={styles.textSignIn}> Sign In</Text>
        </Link>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textSignIn: {
    color: "white",
    fontWeight: "bold",
    marginTop: 40,
    marginLeft: 30,
    fontSize: 20,
  },
});

export default SignInTab;
