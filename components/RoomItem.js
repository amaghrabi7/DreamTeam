import React from "react";

// Mobx
import { observer } from "mobx-react";

import Deleteroom from "./DeleteButton";

// Styling
import { ListItem } from "native-base";
import { RoomItemStyled } from "../styles";

const RoomItem = ({ room, navigation, props }) => {
  const room = props.room;
  return (
    <ListItem onPress={() => navigation.navigate("RoomDetail", { room: room })}>
      <RoomItemStyled>{room.name}</RoomItemStyled>
      <Deleteroom room={room.id} />
    </ListItem>
  );
};

export default observer(RoomItem);
