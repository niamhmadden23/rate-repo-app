import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const formatNumberToK = (number) => {
  return Math.abs(number) > 999
    ? Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k"
    : Math.sign(number) * Math.abs(number);
};
const styles = StyleSheet.create({
  smallLogo: {
    width: 50,
    height: 50,
    borderRadius: 3,
    marginTop: 10,
    marginLeft: 10,
  },
  border: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 7,
    paddingBottom: 15,
  },
  repoLanguage: {
    backgroundColor: "#0366d6",
    padding: 3,
    color: "white",
    borderRadius: 3,
    width: 100,
    textAlign: "center",
    marginTop: 5,
  },
  repoName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  repoStats: {
    marginLeft: 70,
    marginTop: -50,
    width: "50%",
  },
  repoInfo: {
    marginLeft: 10,
    marginTop: 20,
    paddingRight: 70,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.border}>
      <View>
        <Image
          style={styles.smallLogo}
          source={{
            uri: item.ownerAvatarUrl,
          }}
        />
      </View>
      <View style={styles.repoStats}>
        <Text style={styles.repoName}>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.repoLanguage}>{item.language}</Text>
      </View>
      <View style={({ flex: 1 }, { flexDirection: "row" })}>
        <View style={styles.repoInfo}>
          <Text style={{ fontWeight: "bold" }}>
            {formatNumberToK(item.forksCount)}
          </Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.repoInfo}>
          <Text style={{ fontWeight: "bold" }}>
            {formatNumberToK(item.stargazersCount)}
          </Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.repoInfo}>
          <Text style={{ fontWeight: "bold" }}>
            {formatNumberToK(item.ratingAverage)}
          </Text>
          <Text color="textSecondary">Rating</Text>
        </View>
        <View style={styles.repoInfo}>
          <Text style={{ fontWeight: "bold" }}>
            {formatNumberToK(item.reviewCount)}
          </Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
