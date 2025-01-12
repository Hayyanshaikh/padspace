import axios from "axios";

const api = axios.create({
  baseURL: "https://6781237b85151f714b098b06.mockapi.io/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
