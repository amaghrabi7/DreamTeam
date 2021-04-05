import { makeAutoObservable } from "mobx";
import instance from "./instance";

//decode
import decode from "jwt-decode";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }
  //set user
  setUser = (token) => {
    // localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  //sign up
  signup = async (userData) => {
    try {
      const res = await instance.post("/singup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  //sign in
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
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
    // localStorage.removeItem("myToken");
  };

  //check if token exist
  //   checkForToken = () => {
  //     const token = localStorage.getItem("myToken");
  //     if (token) {
  //       const user = decode(token);
  //       if (Date.now() < user.exp) {
  //         this.setUser(token);
  //       } else {
  //         this.signout();
  //       }
  //     }
  //   };
}

const authStore = new AuthStore();
// authStore.checkForToken();

export default authStore;
