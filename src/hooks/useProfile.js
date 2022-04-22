import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../actions/profile.actions";

export const useProfile = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile) {
      getProfile(dispatch);
    }
  }, [profile, dispatch]);

  return profile;
};
