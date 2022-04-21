import React from "react";
const HomeScreen = () => {
  return (
    <div className="mt-3 bg-secondary rounded " style={{"width":"80%","height":"60vh","color":"white"}}>
      <div className="container justify-content-center">
        <h1 > Welcome to BrewMaster</h1>
        <p> Are you looking for a craft beer after a long day of work? Here at BrewMaster's
        we understand. After having problems finding the best breweries in our area, we
         decided to create a website that will connect you to the best breweries near you. No more
         stale beer or dingy dive bars. Use the search functionality at BrewMaster's and get connected
         to your new favorite brewery</p>

         <p> Login or create an account to join the BrewMaster community and be able to add reviews
         and ratings to help other thirsty travelers find their next watering hole </p>

         <p> Are you a brewery owner who's brewery isn't showing up? Create an account today to list
         your brewery to the BrewMaster community! </p>
       </div>
    </div>
  );
}

export default HomeScreen;