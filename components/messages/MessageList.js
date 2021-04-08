import React from "react";
import messageAPIStore from "../../stores/messageStore";
import { observer } from "mobx-react";
import MessageItem from "../messages/MessageItem";
import { AuthTitle } from "../../styles";
const MessageList = () => {
  const messageList = messageAPIStore.message.map((element) => (
    <MessageItem message={element} key={element.id} />
  ));
  return (
    <>
      <AuthTitle>{messageList}</AuthTitle>
    </>
  );
};

export default observer(MessageList);
