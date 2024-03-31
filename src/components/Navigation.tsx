import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Icon from "@expo/vector-icons/EvilIcons";
import { PeopleList } from "./PeopleList";
import { AddPerson } from "./AddPerson";
import { CompanyList } from "./CompanyList";

const Tab = createMaterialBottomTabNavigator();
export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="People"
      activeColor="#f0edf6"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="People"
        component={PeopleList}
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ color }) => (
            <Icon name={"user"} color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPerson}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <Icon name={"plus"} color={color} size={32} />
          ),
        }}
      />
      <Tab.Screen
        name="Company"
        component={CompanyList}
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ color }) => (
            <Icon name={"archive"} color={color} size={32} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
