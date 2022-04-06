import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarRepoTab from "./AppBarRepoTab";
import SignInTab from "./SignInTab";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: "black",
    opacity: 0.7,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarRepoTab />
      <SignInTab />
    </View>
  );
};

export default AppBar;
