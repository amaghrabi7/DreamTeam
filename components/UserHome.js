import React from "react";

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
        <Button onPress={() => navigation.navigate("CreateForum")}>
          <ButtonStyledText>Create Forum</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.navigate("MyForums")}>
          <ButtonStyledText>My Forums</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.navigate("JoinForum")}>
          <ButtonStyledText>Join Forum</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.replace("Home")}>
          <ButtonStyledText>Signout</ButtonStyledText>
        </Button>
      </BottomStyling>
    </OverLayContainer>
  );
};

export default UserHome;
