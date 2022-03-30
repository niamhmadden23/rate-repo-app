import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  smallLogo: {
    width: 50,
    height: 50,
  },
});

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
      <Image
        style={styles.smallLogo}
        source={{
          uri: item.ownerAvatarUrl,
        }}
      />
    </View>
  );
};

export default RepositoryItem;
