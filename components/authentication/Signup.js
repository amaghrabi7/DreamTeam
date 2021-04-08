import React, { useState } from "react";

// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../../styles";

// authStore
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("UserHome");
  };
  return (
    <AuthContainer>
      <AuthTitle>Signup</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="email"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signin")}>
        Click here to Signin!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signup;
