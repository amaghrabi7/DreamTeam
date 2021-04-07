import React, { useState } from "react";

// Styling
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButtonText,
  AuthButton,
  AuthOther,
} from "../styles";

// room Store
import roomStore from "../stores/roomStore";

const CreateRoom = ({ navigation }) => {
  const [room, setRoom] = useState({
    roomName: "", // backend name?
  });
  const handleSubmit = async () => {
    await roomStore.createRoom(room);
  };
  return (
    <AuthContainer>
      <AuthTitle>Create Room</AuthTitle>
      <AuthTextInput
        onChangeText={(roomName) => setRoom({ ...user, roomName })}
        placeholder="Room Name"
        placeholderTextColor="#A6AEC1"
      />

      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Create</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("UserHome")}>
        Back
      </AuthOther>
    </AuthContainer>
  );
};

export default CreateRoom;
