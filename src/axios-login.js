import axios from "axios";

const instance = axios.create({
  baseURL: "https://login-screen-86133.firebaseio.com/"
});

export default instance;
