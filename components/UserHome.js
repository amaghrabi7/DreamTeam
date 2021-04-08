import React from "react";
import messageAPIStore from "../stores/messageStore"
import roomAPIStore from "../stores/roomStore"

// Styling
import {
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyledText,
  Button,
} from "../styles";

const UserHome = ({ navigation }) => {
  return (
    <OverLayContainer>
      <TopStyling>
        <Title>Welcome User</Title>
      </TopStyling>
      <BottomStyling>
        <Button onPress={() => navigation.navigate("CreateRoom")}>
          <ButtonStyledText>Create Room</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.navigate("MyRooms")}>
          <ButtonStyledText>My Rooms</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.navigate("JoinRoom")}>
          <ButtonStyledText>Join Room</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.replace("Home")}>
          <ButtonStyledText>Signout</ButtonStyledText>
        </Button>
      </BottomStyling>
    </OverLayContainer>
  );
};

export default UserHome;
