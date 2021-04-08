import React from "react";

// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import UserHome from "../UserHome";
import CreateRoom from "../CreateRoom";
import RoomPage from "../RoomPage";


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
      <Screen
        name="CreateRoom"
        component={CreateRoom}
        options={{ headerShown: false }}
      />
      <Screen
        name="RoomPage"
        component={RoomPage}
        options={{ headerShown: false }}
      />
      {/* <Screen
        name="MyRooms"
        component={MyRooms}
        options={{ headerShown: false }}
      />
      <Screen
        name="JoinRoom"
        component={JoinRoom}
        options={{ headerShown: false }}
      /> */}
    </Navigator>
  );
};

export default RootNavigator;
