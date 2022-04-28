import React from "react";
import styled from "styled-components";
import { useProfile } from "../hooks/useProfile";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  padding: 8px;
  margin: 12px 4px;
  border: 1px solid orange;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  display: block;
`;

const SubText = styled.div`
  font-size: 14px;
`;

export default function UserCard({ user }) {
  const profile = useProfile();

  if (profile && user._id === profile._id) {
    return <Container to="/profile">You</Container>;
  }

  return (
    <Container to={`/profile/${user.username}`}>
      {user.name}
      <SubText>{user.username}</SubText>
    </Container>
  );
}