import axios from "axios";
import { makeAutoObservable } from "mobx";

class UserAPIStore {
  constructor() {
    makeAutoObservable(this);
  }
  users = [];

  fetchUser = async () => {
    const response = await axios.get("http://192.168.8.104:8000/users");
    this.users = response.data;
  };
  signup = async () => {
    const response = await axios.get("http://192.168.8.104:8000/users");
    this.users = response.data;
  };
  signin = async () => {
    const response = await axios.get("http://192.168.8.104:8000/users");
    this.users = response.data;
  };
}

const userAPIStore = new UserAPIStore();
userAPIStore.fetchUser();

export default userAPIStore;
