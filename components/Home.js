import React from "react";

// Styling
import { TopStyling, Title, OverLayContainer, BottomStyling } from "../styles";

const Home = ({ navigation }) => {
  return (
    <OverLayContainer>
      <TopStyling>
        <Title>Welcome to the Forum</Title>
      </TopStyling>
      <BottomStyling />
    </OverLayContainer>
  );
};

export default Home;
