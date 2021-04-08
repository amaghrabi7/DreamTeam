import { observer } from "mobx-react";
import authStore from "../../Store/authStore";

const Deleteroom = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
    authStore.deleteRooms(props.room);
  };
  return (
    <button onClick={handleDelete} emp={props.room}>
      Delete
    </button>
  );
};

export default observer(Deleteroom);
