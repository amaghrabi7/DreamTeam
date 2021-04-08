import { makeAutoObservable } from "mobx";
import axios from "axios";

class MessageAPIStore {
  constructor() {
    makeAutoObservable(this);
  }
  message = [];

  fetchMessage = async () => {
    const response = await axios.get("http://192.168.8.104:8000/rooms/messages");
    this.message = response.data;
  };
}

const messageAPIStore = new MessageAPIStore();
messageAPIStore.fetchMessage();

export default messageAPIStore;
