import { StyleSheet, Text, View } from "react-native";

export const CompanyItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Company Item</Text>
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
