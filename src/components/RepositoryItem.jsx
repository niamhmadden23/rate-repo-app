import { View, Text } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>{item.fullName}</Text>
      <Text>{item.description}</Text>
      <Text>{item.language}</Text>
      <Text>{item.forksCount}</Text>
      <Text>{item.starGazersCount}</Text>
      <Text>{item.ratingAverage}</Text>
      <Text>{item.reviewCount}</Text>
      <Text>{item.ownerAvatarUrl}</Text>
    </View>
  );
};

export default RepositoryItem;
