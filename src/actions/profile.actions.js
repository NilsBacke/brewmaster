import * as service from "../services/auth-service.js";
import { getUser } from "../services/user-service.js";

export const GET_PROFILE = "GET_PROFILE";
export const LOGOUT = "LOGOUT";

export const getProfile = async (dispatch) => {
  const profile = await service.profile();
  if (profile) {
    const user = await getUser(profile._id);
    dispatch({
      type: GET_PROFILE,
      profile: user,
    });
  } else {
    dispatch({
      type: GET_PROFILE,
      profile: null,
    });
  }
};
