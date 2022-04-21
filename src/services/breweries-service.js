import axios from "axios";
const API = `http://localhost:4000/api`;

export const searchBreweries = async (search) => {
  const response = await axios.get(
    !!search ? API + `/breweries?search=${search}` : API + `/breweries`
  );
  const breweries = response.data;
  return breweries;
};

export const getBrewery = async (id) => {
  const response = await axios.get(API + `/breweries/${id}`);
  const brewery = response.data;
  return brewery;
};
