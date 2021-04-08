import { makeAutoObservable } from "mobx";
import axios from "axios";

class UserAPIStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = [];

  fetchUser = async () => {
    const response = await axios.get("http://192.168.8.104:8000/users");
    this.user = response.data;
  };
}

const userAPIStore = new UserAPIStore();
userAPIStore.fetchUser();

export default userAPIStore;
