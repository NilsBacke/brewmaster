import React from "react";
import Bookmarks from "../Bookmarks";
import backgroundImage from "../../images/beer_background.png";
const HomeScreen = () => {
  const bgImage = {
    backgroundImage:`url(${backgroundImage})`,
    "height":"100vh",
    "background-repeat":"repeat-x",
  }
  const bgColor = {
    "background-color":"black",
    "width":"100vw",
    "height":"100vh"
  }
  return (
    <div style={bgColor}>
      <div style={bgImage}>
      </div>
    </div>
  );
}

export default HomeScreen;