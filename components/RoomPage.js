import React, { useState } from "react";
import MessageList from "./messages/MessageList";
// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../styles";
import messageAPIStore from "../stores/messageStore";

// room Store
import authStore from "../stores/authStore";

const RoomPage = ({ navigation }) => {
  const [message, setMessage] = useState({
    text: "", // backend name?
  });
  const handleSubmit = async () => {
    await authStore.createMessage(message);
  };
  return (
    <AuthContainer>
      <AuthTitle>Room</AuthTitle>
      <MessageList />
      <AuthTextInput
        onChangeText={(text) => setMessage({ ...message, text })}
        placeholder="send message"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Send</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("UserHome")}>
        Back
      </AuthOther>
    </AuthContainer>
  );
};

export default RoomPage;
