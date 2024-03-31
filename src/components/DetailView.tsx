import { View, Text, StyleSheet } from "react-native";
import * as action from "../actions";

export const DetailView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail View</Text>
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
