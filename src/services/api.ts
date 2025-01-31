import axios from "axios";

const api = axios.create({
  baseURL: "https://api-staging.seuseventos.com.br/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
