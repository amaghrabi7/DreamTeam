import React from "react";

// Mobx
import { observer } from "mobx-react";

// Styling
import { ListItem } from "native-base";
import { RoomItemStyled } from "../styles";

const RoomItem = ({ room, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("RoomDetail", { room: room })}>
      <RoomItemStyled>{room.name}</RoomItemStyled>
    </ListItem>
  );
};

export default observer(RoomItem);
