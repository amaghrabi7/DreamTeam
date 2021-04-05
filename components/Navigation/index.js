import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default RootNavigator;
