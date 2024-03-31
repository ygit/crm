import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "@expo/vector-icons/EvilIcons";
import { connect } from "react-redux";
import * as actions from "../actions";

type PeopleItemProps = {
  image: string;
  name: string;
  company: string;
};

export const PeopleItem = (people: PeopleItemProps) => {
  return (
    <View style={styles.container}>
      {people.image && (
        <Image source={{ uri: people.image }} style={styles.image} />
      )}
      <Icon name={"user"} size={32} color={"black"} />
      <View>
        <Text style={styles.text}>{people.name}</Text>
        <Text style={styles.text}>{people.company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
  },
  image: {
    width: 32,
    height: 32,
  },
});

connect(null, actions)(PeopleItem);
