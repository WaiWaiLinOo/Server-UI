import axios from "axios";

export default axios.create({
  baseURL: "https://wailinoo-api.onrender.com/api",
  // baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});