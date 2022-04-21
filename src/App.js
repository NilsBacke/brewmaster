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
import NavBar from "./components/NavBar"
function App() {
  const bgImage = {
    backgroundImage:`url(${backgroundImage})`,
    "height":"100vh",
    "background-repeat":"repeat-x",
  }
  document.body.style = 'background: black';
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <div style={bgImage} className="d-flex justify-content-center">
          <Routes>
            <Route path="/">
              <Route index element={<HomeScreen />} />
              <Route path="login" element={<LoginScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="details/:uid" element={<BreweryDetailScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="profile/:uid" element={<ProfileScreen />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
