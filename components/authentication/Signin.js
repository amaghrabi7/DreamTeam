import React from "react";

// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../../styles";

const Signin = () => {
  return (
    <AuthContainer>
      <AuthTitle>Signin</AuthTitle>
      <AuthTextInput placeholder="Username" placeholderTextColor="#A6AEC1" />
      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther>Click here to register!</AuthOther>
    </AuthContainer>
  );
};

// branching
