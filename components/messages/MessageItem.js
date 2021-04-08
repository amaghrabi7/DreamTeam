import React from "react";
import { AuthTitle } from "../../styles";
const MessageItem = (props) => {
  const message = props.message;
  return <AuthTitle>{`${message.text} \n`}</AuthTitle>;
};
export default MessageItem;
