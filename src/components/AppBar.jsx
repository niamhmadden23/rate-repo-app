import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Repositories</Text>
    </View>
  );
};

export default AppBar;
