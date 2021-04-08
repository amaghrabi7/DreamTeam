import React from "react";

// Mobx
import { observer } from "mobx-react";

// Room Store
import roomStore from "../stores/roomStore";

// Styling

import { RoomDetailTitle, RoomDetailWrapper } from "../styles";

import messageStore from "../stores/messageStore";

// Native Base Styling
import { Spinner } from "native-base";

import MessageList from "./MessageList";

const RoomDetail = ({ navigation, route }) => {
  if (roomStore.loading) return <Spinner />;
  const { room } = route.params;
  const messagesFromMessageStore = room.message.map((message) =>
    messageStore.getMessageById(message.id)
  );
  return (
    <>
      <RoomDetailWrapper>
        <RoomDetailTitle>{room.name}</RoomDetailTitle>
      </RoomDetailWrapper>
      <MessageList messages={messagesFromMessageStore} />
    </>
  );
};

export default observer(BakeryDetail);
