import React, { useState, useEffect } from "react";
import { searchBreweries, getBrewery } from "../../services/breweries-service";
import { useProfile } from "../../hooks/useProfile";
import BreweryCard from "../BreweryCard.js";

const HomeScreen = () => {
  const [breweries, setBreweries] = useState([]);
  const [size, setSize] = useState(window.innerWidth);

  const profile = useProfile();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    searchBreweries("").then((r) => setBreweries(r));
  }, []);

  const handleResize = () => {
    setSize(
      window.innerWidth
    );
  }
  useEffect(() => {
    if (profile && profile.bookmarkedBreweries) {
      const promises = [];
      for (const b of profile.bookmarkedBreweries) {
        promises.push(getBrewery(b));
      }
      Promise.all(promises).then((books) => setBookmarks(books));
    }
    window.addEventListener("resize", handleResize, false);
  }, [profile]);

  const loggedIn = !!profile;

  const list = loggedIn ? bookmarks : breweries;

    const lgStyle={
      'width':'80%',
      'color':'white',
      height: "auto"
    }
    const smStyle={
      'width':'100%',
      'color':'white',
      height: "auto"
    }
    const style = (size > 768)? lgStyle :smStyle;

  return (
    <div
      className="mt-3 bg-secondary rounded"
      style={style}
    >
      <div className="container justify-content-center">
        <h1>Welcome to BrewMaster</h1>
        <p>
          {" "}
          Are you looking for a craft beer after a long day of work? Here at
          BrewMaster's we understand. After having problems finding the best
          breweries in our area, we decided to create a website that will
          connect you to the best breweries near you. No more stale beer or
          dingy dive bars. Use the search functionality at BrewMaster's and get
          connected to your new favorite brewery
        </p>

        <p>
          {" "}
          Login or create an account to join the BrewMaster community and be
          able to add reviews and ratings to help other thirsty travelers find
          their next watering hole{" "}
        </p>

        <p>
          {" "}
          Are you a brewery owner who's brewery isn't showing up? Create an
          account today to list your brewery to the BrewMaster community!{" "}
        </p>
      </div>
      <div className="container">
        {loggedIn ? <h1>Your Bookmarks</h1> : <h1>Explore Breweries</h1>}
        {list.map((b, i) => (
          <BreweryCard brewery={b} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
