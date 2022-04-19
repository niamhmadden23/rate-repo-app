import { render } from "react-dom";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useReposotories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};
export default RepositoryList;
