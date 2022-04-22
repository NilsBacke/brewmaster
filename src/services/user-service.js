import axios from "axios";
const BASE_URL = "http://localhost:4000/api";
const API = `${BASE_URL}/users`;

export const getUser = (id) =>
  axios.get(`${API}/${id}`).then((response) => response.data);
