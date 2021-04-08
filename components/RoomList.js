import React from "react";

// Mobx
import { observer } from "mobx-react";

// Styling
import { AuthContainer, AuthTitle } from "../styles";

// Components
import RoomItem from "./RoomItem";

// Native Base Styling
import { List, Content, Spinner } from "native-base";

// room Store
import roomStore from "../stores/roomStore";

const RoomList = ({ navigation }) => {
  const roomList = roomStore.room.map((room) => (
    <roomItem room={room} key={room.id} />
  ));
  if (roomStore.loading) return <Spinner />;
  return (
    <AuthContainer>
      <AuthTitle>My Rooms</AuthTitle>
      <Content>
        <List>{roomList}</List>
      </Content>
      <AuthOther onPress={() => navigation.navigate("UserHome")}>
        Back
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(RoomList);
