import axios from "axios";
import { BASE_URL } from "./api.js";
const API = `${BASE_URL}/users`;

export const getUser = (id) =>
  axios.get(`${API}/${id}`).then((response) => response.data);

export const updateUser = (profile) => {
  console.log(profile, profile._id);
  axios.put(`${API}/${profile._id}`, profile).then((response) => response.data);
};

export const getAllUsers = () => axios.get(`${API}`).then((res) => res.data);
