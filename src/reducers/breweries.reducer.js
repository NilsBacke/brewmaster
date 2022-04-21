import { CREATE_BREWERY, SEARCH_BREWERYS } from "../actions/breweries.actions";

const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BREWERYS:
      return action.breweries;
    default:
      return state;
  }
};

export default breweriesReducer;
