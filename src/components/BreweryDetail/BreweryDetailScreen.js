import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getBrewery } from "../../services/breweries-service.js";

const BookmarkContainer = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export default function BreweryDetailScreen() {
  const { uid } = useParams();
  const [brewery, setBrewery] = useState(undefined);

  useEffect(() => {
    getBrewery(uid).then((res) => {
      setBrewery(res);
    });
  }, []);

  const bookmarked = true;

  const onClickBookmark = () => {};

  return (
    <div
      className="mt-3 p-3 bg-secondary rounded"
      style={{ width: "80%", color: "white" }}
    >
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
          >
            {brewery.website_url}
          </a>
          <div className="h5 mt-3">Bookmarked By:</div>
        </>
      )}
    </div>
  );
}
