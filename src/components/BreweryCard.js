import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default function BreweryCard({ brewery }) {
  const navigate = useNavigate();
  return (
    <Container
      className="mx-2 my-3 p-2 border rounded"
      onClick={() => navigate(`/details/${brewery.id}`)}
    >
      <div className="h4">{brewery.name}</div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {brewery.street}
        {brewery.street && "\n"}
        {brewery.city}, {brewery.state}
      </div>
    </Container>
  );
}
