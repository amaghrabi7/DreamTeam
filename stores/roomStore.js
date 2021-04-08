import { makeAutoObservable } from "mobx";
import axios from "axios";

class RoomAPIStore {
  constructor() {
    makeAutoObservable(this);
  }
  room = [];

  fetchRoom = async () => {
    const response = await axios.get("http://192.168.8.104:8000/rooms");
    this.room = response.data;
  };
}

const roomAPIStore = new RoomAPIStore();
roomAPIStore.fetchRoom();

export default roomAPIStore;
