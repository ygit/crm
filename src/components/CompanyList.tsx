import { View, Text, StyleSheet } from "react-native";
import { CompanyItem } from "./CompanyItem";
import { connect } from "react-redux";

export const CompanyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Company List</Text>
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
