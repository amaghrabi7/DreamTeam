import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RoomStore {
  rooms = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Room
  fetchRoom = async () => {
    try {
      const response = await instance.get("");
      (this.rooms = response.data), (this.loading = false);
    } catch (error) {
      console.log("roomStore => fetchRoom => Error", error);
    }
  };
  // Create Room
  createRoom = async (newRoom) => {
    try {
      const response = await axios.post("", newRoom);
      this.rooms.push(response.data);
    } catch (error) {
      console.log("RoomStore -> createRoom -> error", error);
    }
  };

  //delete room
  deleteRoom = async (rm) => {
    console.log(rm);
    try {
      await axios.delete(`${rm}`);
      this.rooms = this.rooms.filter((room) => room.id !== +rm);
    } catch (error) {
      console.error("RoomStore -> deleteRoomStore -> error", error);
    }
  };
}

const roomStore = new RoomStore();
roomStore.fetchRoom();

export default roomStore;
