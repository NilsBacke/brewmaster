import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { searchBreweries } from "../../actions/breweries.actions";
import BreweryCard from "../BreweryCard";

export default function SearchScreen() {
  const breweries = useSelector((state) => state.breweries);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const query = params.get("query") ?? "";

  const [search, setSearch] = useState(query);

  useEffect(() => {
    if (query.length > 0) {
      searchBreweries(dispatch, query);
    }
  }, [query]);

  useEffect(() => {
    searchBreweries(dispatch, "");
  }, [dispatch]);

  const onSearchPress = () => {
    navigate(`/search?query=${search}`);
  };

  return (
    <div
      className="mt-3 p-3 bg-secondary rounded "
      style={{ width: "80%", color: "white" }}
    >
      <h1 className="mb-3">Search Breweries</h1>
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={onSearchPress}>Search</button>
      </div>
      {breweries.map((b, i) => (
        <BreweryCard brewery={b} key={i} />
      ))}
    </div>
  );
}
