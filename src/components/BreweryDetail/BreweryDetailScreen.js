import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GET_PROFILE } from "../../actions/profile.actions.js";
import { useProfile } from "../../hooks/useProfile.js";
import { getBrewery } from "../../services/breweries-service.js";
import { updateUser, getAllUsers } from "../../services/user-service.js";
import UserCard from "../UserCard.js";
import Maps from "../Map/Maps.js";

const BookmarkContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export default function BreweryDetailScreen() {
  const { uid } = useParams();
  const [brewery, setBrewery] = useState(undefined);
  const [bookmarkedBy, setBookmarkedBy] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const profile = useProfile();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    getBrewery(uid).then((res) => {
      setBrewery(res);
    });
    getAllUsers().then((res) => {
      setBookmarkedBy(res.filter((u) => u.bookmarkedBreweries?.includes(uid)));
    });
    window.addEventListener("resize", handleResize, false);
  }, [uid]);

  const bookmarked =
    !!profile &&
    profile.bookmarkedBreweries &&
    profile.bookmarkedBreweries.includes(uid);

  const onClickBookmark = async () => {
    if (!profile) {
      navigate(`/login`);
      return;
    }

    const newBookmarks = [...(profile.bookmarkedBreweries ?? [])];
    const newBookmarkedBy = [...bookmarkedBy];
    if (bookmarked) {
      newBookmarks.splice(newBookmarks.indexOf(uid), 1);
      newBookmarkedBy.splice(
        newBookmarkedBy.findIndex((b) => b._id === profile._id),
        1
      );
    } else {
      newBookmarks.push(uid);
      newBookmarkedBy.push(profile);
    }

    setBookmarkedBy(newBookmarkedBy);
    const newProfile = {
      ...profile,
      bookmarkedBreweries: newBookmarks,
    };

    dispatch({
      type: GET_PROFILE,
      profile: newProfile,
    });

    await updateUser(newProfile);
  };

  const lgStyle = {
    width: "80%",
    color: "white",
    "margin-top": "70px",
  };
  const smStyle = {
    width: "100%",
    color: "white",
    "margin-top": "70px",
  };
  const style = size > 768 ? lgStyle : smStyle;

  return (
    <>
      <div className="p-3 bg-secondary rounded" style={style}>
        {!!brewery && (
          <>
            <div className="h4">
              {brewery.name}{" "}
              <BookmarkContainer
                className="rounded ms-3"
                onClick={onClickBookmark}
              >
                {bookmarked ? (
                  <i className="fa-solid fa-bookmark"></i>
                ) : (
                  <i className="fa-regular fa-bookmark"></i>
                )}
              </BookmarkContainer>
            </div>
            <div style={{ whiteSpace: "pre-wrap" }}>
              {brewery.street}
              {brewery.street && "\n"}
              {brewery.city}, {brewery.state}
            </div>
            <div>{brewery.phone}</div>
            <a
              style={{ color: "lightblue" }}
              href={brewery.website_url}
              target="_blank"
              rel="noreferrer"
            >
              {brewery.website_url}
            </a>
            <div className="h5 mt-3">Bookmarked By:</div>
            {bookmarkedBy.length === 0 && <div>No one yet!</div>}
            {bookmarkedBy.map((u, i) => (
              <UserCard user={u} key={i} />
            ))}
            <Maps brewery={brewery} />
          </>
        )}
      </div>
    </>
  );
}
