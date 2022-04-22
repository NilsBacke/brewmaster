import { GET_PROFILE, LOGOUT } from "../actions/profile.actions";

const profileReducer = (state = null, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return action.profile;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default profileReducer;
