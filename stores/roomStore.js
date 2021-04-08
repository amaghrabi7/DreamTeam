import { makeAutoObservable } from "mobx";
import instance from "./instance";
import axios from "axios";
import { AsyncStorage } from "react-native";

//decode
import decode from "jwt-decode";


class RoomAPIStore {
  constructor() {
    makeAutoObservable(this);
  }
  room = [];
  user = null

  //set user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };


  fetchRoom = async () => {
    const response = await axios.get("http://192.168.8.104:8000/rooms");
    this.room = response.data;
  };

  createRoom = async (newRoom) => {
    try {
      const res = await axios.post("http://192.168.8.104:8000/rooms/createRoom", newRoom);
      this.setUser(res.data.token);
      this.user = decode(res.data.token);
      this.room.push(res.data);
    } catch (error) {
      console.log("roomStore -> createRoom -> error", error);
    }
  };
}

const roomAPIStore = new RoomAPIStore();
roomAPIStore.fetchRoom();

export default roomAPIStore;
