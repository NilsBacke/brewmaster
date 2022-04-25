import axios from "axios";
import { BASE_URL } from "./api.js";

export const searchBreweries = async (search) => {
  const response = await axios.get(
    !!search
      ? BASE_URL + `/breweries?search=${search}`
      : BASE_URL + `/breweries`
  );
  const breweries = response.data;
  return breweries;
};

export const getBrewery = async (id) => {
  const response = await axios.get(BASE_URL + `/breweries/${id}`);
  const brewery = response.data;
  return brewery;
};
