import { makeAutoObservable } from "mobx";
import instance from "./instance";
import axios from "axios";
import { AsyncStorage } from "react-native";

//decode
import decode from "jwt-decode";

class AuthStore {
  user = null;
  room = [];
  message = [];
  constructor() {
    makeAutoObservable(this);
  }
  //set user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  //sign up
  signup = async (userData) => {
    try {
      const res = await axios.post(
        "http://192.168.8.104:8000/signup",
        userData
      );
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  //sign in
  signin = async (userData) => {
    try {
      const res = await axios.post(
        "http://192.168.8.104:8000/signin",
        userData
      );
      this.setUser(res.data.token);
      this.user = decode(res.data.token);
      console.log("AuthStore -> signin -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  //sign out
  signout = () => {
    this.user = null;
    delete instance.defaults.headers.common.Authorization;
    AsyncStorage.removeItem("myToken");
  };

  // Create Room
  createRoom = async (newRoom) => {
    try {
      const token = await AsyncStorage.getItem("myToken");      
      const res = await axios.post(
        "http://192.168.8.104:8000/rooms/createRoom",
        newRoom,
        { headers: { Authorization: `Bearer ${token}`}}
      );
      this.room.push(res.data);
    } catch (error) {
      
      console.log("authStore -> createRoom -> error ", error);
    }
  };

  // Create Room
  createMessage = async (newMessage) => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      const res = await axios.post(
        "http://192.168.8.104:8000/rooms/:roomId/createMessage",
        newMessage,
        { headers: { Authorization: `Bearer ${token}`}}
      );
      this.message.push(res.data);
    } catch (error) {
      
      console.log("authStore -> createMessage -> error ", error);
    }
  };

  // check if token exists
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
