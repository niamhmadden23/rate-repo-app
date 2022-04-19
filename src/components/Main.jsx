import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import { Route, Routes, Navigate } from "react-router";
import AppBar from "./AppBar";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <View>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
