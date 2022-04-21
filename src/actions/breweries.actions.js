import * as service from "../services/breweries-service.js";

export const CREATE_BREWERY = "CREATE_BREWERY";
export const SEARCH_BREWERYS = "SEARCH_BREWERYS";
export const UPDATE_BREWERY = "UPDATE_BREWERY";

export const searchBreweries = async (dispatch, search) => {
  const breweries = await service.searchBreweries(search);
  dispatch({
    type: SEARCH_BREWERYS,
    breweries,
  });
};
