import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useProfile } from "../../hooks/useProfile";
import { createBrewery } from "../../services/breweries-service";
import Button from "../Button.js";
import { GET_PROFILE } from "../../actions/profile.actions.js";
import { updateUser } from "../../services/user-service.js";

export default function CreateBrewery() {
  const profile = useProfile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  useEffect(() => {
    if (profile && profile.type !== "BreweryOwner") {
      navigate("/profile");
    }
  }, [profile]);

  const disabled = !name || !street || !city || !state || !websiteUrl;

  const onCreate = async () => {
    const newBrewery = await createBrewery({
      name,
      street,
      city,
      state,
      websiteUrl,
      createdBy: profile._id,
    });

    const newProfile = {
      ...profile,
      ownedBreweryId: newBrewery._id,
    };
    dispatch({
      type: GET_PROFILE,
      profile: newProfile,
    });

    await updateUser(newProfile);

    navigate("/profile");
  };

  return (
    <div
      className="mt-3 bg-secondary rounded p-4"
      style={{ width: "80%", height: "60vh", color: "white" }}
    >
      <h1>New Brewery</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="street">Street</label>
      <input
        type="text"
        className="form-control"
        id="street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        className="form-control"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor="state">State</label>
      <input
        type="text"
        className="form-control"
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="website">Website</label>
      <input
        type="text"
        className="form-control"
        id="website"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
      />
      <Button
        title="Create Brewery"
        onClick={onCreate}
        className="mt-3"
        disabled={disabled}
      />
    </div>
  );
}
