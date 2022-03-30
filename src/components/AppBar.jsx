import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarRepoTab from "./AppBarRepoTab";

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
      <AppBarRepoTab />
    </View>
  );
};

export default AppBar;
