import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import UserHome from "../UserHome";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="UserHome"
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
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="UserHome"
        component={UserHome}
        options={{ headerShown: false }}
      />
      {/* <Screen
        name="CreateForum"
        component={CreateForum}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyForums"
        component={MyForums}
        options={{ headerShown: false }}
      />
      <Screen
        name="JoinForum"
        component={JoinForums}
        options={{ headerShown: false }}
      /> */}
    </Navigator>
  );
};

export default RootNavigator;
