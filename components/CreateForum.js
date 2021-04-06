import React, { useState } from "react";

import {
    AuthContainer,
    AuthTitle,
    AuthTextInput,
    AuthButtonText,
    AuthButton,
    AuthOther,
  } from "../../styles";


const Room = ({ navigation }) => {
    const [room, seetRoom] = usetRoom({
     room_name = ""
    });
    const handleSubmit = async () => {
        await authStore.Room(room);
      };
      return (
        <AuthContainer>
          <AuthTitle>CreateForum</AuthTitle>
          <AuthTextInput
            onChangeText={(room_name) => setUser({ ...room, room_name })}
            placeholder="Room Name"
            placeholderTextColor="#A6AEC1"
          />
        
          <AuthButton onPress={handleSubmit}>
            <AuthButtonText>Create Forum</AuthButtonText>
          </AuthButton>
          <AuthOther onPress={() => navigation.navigate("Home")}>
            Click here to go Back!
          </AuthOther>
        </AuthContainer>
      );
};
export default Room;