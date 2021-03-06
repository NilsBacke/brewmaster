import axios from "axios";
import { BASE_URL } from "./api.js";
const API = `${BASE_URL}/auth`;

const api = axios.create({
  withCredentials: true,
});

export const signup = (user) =>
  api.post(`${API}/signup`, user).then((response) => response.data);

export const login = (user) =>
  api.post(`${API}/login`, user).then((response) => response.data);

export const logout = (user) =>
  api.post(`${API}/logout`, user).then((response) => response.data);

export const profile = () =>
  api.post(`${API}/profile`).then((response) => response.data);
