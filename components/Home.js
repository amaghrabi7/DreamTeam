import React from "react";

// Styling
import {
  TopStyling,
  Title,
  OverLayContainer,
  BottomStyling,
  ButtonStyledText,
  SigninHomeButton,
  SignupHomeButton,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <OverLayContainer>
      <TopStyling>
        <Title>Welcome to the Forum</Title>
      </TopStyling>
      <BottomStyling>
        <SigninHomeButton onPress={() => navigation.navigate("Signin")}>
          <ButtonStyledText>Sign in</ButtonStyledText>
        </SigninHomeButton>
        <SignupHomeButton onPress={() => navigation.navigate("Signup")}>
          <ButtonStyledText>Sign up</ButtonStyledText>
        </SignupHomeButton>
      </BottomStyling>
    </OverLayContainer>
  );
};

export default Home;
