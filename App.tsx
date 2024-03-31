import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./src/reducers/PeopleReducer";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/components/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const store = createStore(reducers, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
