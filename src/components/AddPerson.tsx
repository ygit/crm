import { Text, View, StyleSheet } from "react-native";

export const AddPerson = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Person</Text>
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
