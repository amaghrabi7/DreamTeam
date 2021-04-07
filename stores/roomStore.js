import { makeAutoObservable } from "mobx";
import instance from "./instance";

class RoomStore {
  rooms = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  // Fetch Room
fetchRoom = () => {
    try{ 
        const response = await instance.get (//call backend route//);
        this.rooms = response.data
        this.loading = false
         }catch(error) {
console.log("roomStore => fetchRoom => Error", error)
    
    };
// Create Room
createCookie = (cookie) => {
    cookie.id = this.cookies[this.cookies.length - 1].id + 1;
    cookie.slug = slugify(cookie.name);
    this.cookies.push(cookie);
  };
};

const roomStore = new RoomStore();
roomStore.fetchRoom();
export default roomStore;
