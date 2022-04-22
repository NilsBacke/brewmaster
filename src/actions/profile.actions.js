import * as service from "../services/auth-service.js";

export const GET_PROFILE = "GET_PROFILE";
export const LOGOUT = "LOGOUT";

export const getProfile = async (dispatch) => {
  const profile = await service.profile();
  dispatch({
    type: GET_PROFILE,
    profile,
  });
};
