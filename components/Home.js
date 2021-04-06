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

const Home = ({ navigation }) => {
  return (
    <OverLayContainer>
      <TopStyling>
        <Title>Welcome to the Forum</Title>
      </TopStyling>
      <BottomStyling>
        <Button onPress={() => navigation.navigate("Signin")}>
          <ButtonStyledText>Sign in</ButtonStyledText>
        </Button>
        <Button onPress={() => navigation.navigate("Signup")}>
          <ButtonStyledText>Sign up</ButtonStyledText>
        </Button>
      </BottomStyling>
    </OverLayContainer>
  );
};

export default Home;
