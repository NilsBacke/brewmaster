import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import LoginScreen from "./components/Login/LoginScreen";
import SearchScreen from "./components/Search/SearchScreen";
import BreweryDetailScreen from "./components/BreweryDetail/BreweryDetailScreen";
import ProfileScreen from "./components/Profile/ProfileScreen";
import backgroundImage from "./images/beer_background.png";
import NavBar from "./components/NavBar";
import { combineReducers, createStore } from "redux";
import breweriesReducer from "./reducers/breweries.reducer.js";
import profileReducer from "./reducers/profile.reducer.js";
import { Provider } from "react-redux";
import CreateBrewery from "./components/CreateBrewery.js/CreateBrewery";
import Maps from "./components/Map/Maps.js"


const reducer = combineReducers({
  breweries: breweriesReducer,
  profile: profileReducer,
});
const store = createStore(reducer);

function App() {
  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100%",
    "background-repeat": "repeat-x"
  };
  document.body.style = "background: black";
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <div style={bgImage}>
          <div style={{ height: "auto"}} className="d-flex justify-content-center">
            <Routes>
              <Route path="/">
                <Route index element={<HomeScreen />} />
                <Route path="login" element={<LoginScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="details/:uid" element={<BreweryDetailScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
                <Route path="profile/:uid" element={<ProfileScreen />} />
                <Route path="create-brewery" element={<CreateBrewery />} />
                <Route path="maptest" element={<Maps />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
