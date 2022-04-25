import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { getBrewery } from "../../services/breweries-service";
import { getUser } from "../../services/user-service.js";
import BreweryCard from "../BreweryCard.js";
import Button from "../Button.js";
import { GET_PROFILE } from "../../actions/profile.actions.js";
import { updateUser } from "../../services/user-service.js";
import { useDispatch } from "react-redux";
import UserCard from "../UserCard";

const ProfileScreen = () => {
  const profile = useProfile();
  const { uid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [usersFollowing, setUsersFollowing] = useState([]);

  useEffect(() => {
    if (uid) {
      getUser(uid).then((user) => {
        setUser(user);
      });
    }
  }, [uid]);

  const realUser = uid ? user : profile;
  const isMe = !uid;
  const isFollowingUser =
    !!uid && !!profile && !!user && profile.following.includes(user._id);

  const [name, setName] = useState(realUser?.name ?? "");
  const [email, setEmail] = useState(realUser?.email ?? "");

  useEffect(() => {
    if (realUser) {
      realUser.name && setName(realUser.name);
      realUser.email && setEmail(realUser.email);
    }
  }, [realUser]);

  useEffect(() => {
    if (realUser && realUser.bookmarkedBreweries) {
      const promises = [];
      for (const b of realUser.bookmarkedBreweries) {
        promises.push(getBrewery(b));
      }
      Promise.all(promises).then((books) => setBookmarks(books));
    }

    if (realUser && realUser.following) {
      const promises = [];
      for (const b of realUser.following) {
        promises.push(getUser(b));
      }
      Promise.all(promises).then((us) => setUsersFollowing(us));
    }
  }, [realUser]);

  const onFollowPress = async () => {
    if (!profile) {
      navigate(`/login`);
      return;
    }

    const newFollowing = [...profile.following];
    if (isFollowingUser) {
      newFollowing.splice(newFollowing.indexOf(user._id), 1);
    } else {
      newFollowing.push(user._id);
    }
    const newProfile = {
      ...profile,
      following: newFollowing,
    };
    dispatch({
      type: GET_PROFILE,
      profile: newProfile,
    });

    await updateUser(newProfile);
  };

  const onSavePress = async () => {
    setEditMode(false);

    const newProfile = {
      ...profile,
      name,
      email,
    };
    dispatch({
      type: GET_PROFILE,
      profile: newProfile,
    });

    await updateUser(newProfile);
  };

  return (
    <div
      className="mt-3 bg-secondary rounded"
      style={{ width: "80%", height: "60vh", color: "white" }}
    >
      {!!realUser ? (
        <div className="m-3">
          {editMode ? (
            <input value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <h1>{realUser.name}</h1>
          )}
          <h5>{realUser.username}</h5>
          {isMe &&
            (editMode ? (
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            ) : (
              <h6>{realUser.email}</h6>
            ))}
          {isMe && (
            <div style={{ maxWidth: 120 }}>
              <Button
                title={editMode ? "Save" : "Edit"}
                onClick={editMode ? onSavePress : () => setEditMode(true)}
              />
            </div>
          )}
          {!isMe && (
            <div style={{ maxWidth: 120 }}>
              <Button
                title={isFollowingUser ? "Unfollow" : "Follow"}
                onClick={onFollowPress}
              />
            </div>
          )}
          <h4 className="mt-4">Bookmarked Breweries:</h4>
          {bookmarks.map((b, i) => (
            <BreweryCard brewery={b} key={i} />
          ))}
          <h4 className="mt-4">Following:</h4>
          {usersFollowing.map((u, i) => (
            <UserCard user={u} key={i} />
          ))}
        </div>
      ) : (
        <div className="m-3 d-flex flex-column align-items-center">
          <h1 className="text-center mb-5">You are not logged in</h1>
          <Link
            to="/login"
            className="h3"
            style={{ textDecoration: "none", color: "orange" }}
          >
            Press here to log in
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileScreen;
