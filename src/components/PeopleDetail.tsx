import { View, Text, StyleSheet } from "react-native";

export const PeopleDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>People Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
