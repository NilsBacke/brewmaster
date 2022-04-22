import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import { getUser } from "../../services/user-service.js";

const ProfileScreen = () => {
  const profile = useProfile();
  const { uid } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (uid) {
      getUser(uid).then((user) => {
        setUser(user);
      });
    }
  }, [uid]);

  const realUser = user ?? profile;

  return (
    <div
      className="mt-3 bg-secondary rounded"
      style={{ width: "80%", height: "60vh", color: "white" }}
    >
      {!!realUser ? (
        <div className="m-3">
          <h1>{realUser.name}</h1>
          <h5>{realUser.username}</h5>
          <h4 className="mt-4">Bookmarked Breweries:</h4>
          <h4 className="mt-4">Following:</h4>
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
