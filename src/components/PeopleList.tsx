import { View, Text, StyleSheet, FlatList } from "react-native";
import { PeopleItem } from "./PeopleItem";
import { PeopleDetail } from "./PeopleDetail";
import { loadInitialContacts } from "../actions";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

export const PeopleList = () => {
  const { people, detailView } = useSelector((state: any) => state);

  useEffect(() => {
    loadInitialContacts();
  }, []);

  const renderInitialView = () => {
    if (detailView) {
      return <PeopleDetail />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>People List</Text>
          <FlatList
            data={people}
            renderItem={(item) => <PeopleItem people={item.item} />}
            keyExtractor={(item, index) => index.toString()}
            style={styles.list}
          />
        </View>
      );
    }
  };

  return <View style={styles.container}>{renderInitialView()}</View>;
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
  list: {
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
  },
});

const mapStateToProps = (state: { people: any; detailView: any }) => {
  return {
    people: state.people,
    detailView: state.detailView,
  };
};
