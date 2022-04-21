import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBreweries } from "../../actions/breweries.actions";
import BreweryCard from "../BreweryCard";

export default function SearchScreen() {
  const breweries = useSelector((state) => state.breweries);
  const dispatch = useDispatch();

  useEffect(() => {
    searchBreweries(dispatch, "");
  }, [dispatch]);

  console.log(breweries);

  return (
    <div
      className="mt-3 p-3 bg-secondary rounded "
      style={{ width: "80%", color: "white" }}
    >
      <h1 className="mb-3">Search Screen</h1>
      {/* {JSON.stringify(breweries)} */}
      {breweries.map((b, i) => (
        <BreweryCard brewery={b} key={i} />
      ))}
    </div>
  );
}
