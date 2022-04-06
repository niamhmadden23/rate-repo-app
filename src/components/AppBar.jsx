import { Text, View, StyleSheet, ScrollView } from "react-native";
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
      <ScrollView horizontal={true}>
        <AppBarRepoTab />
        <SignInTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;
