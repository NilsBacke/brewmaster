import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import LoginScreen from "./components/Login/LoginScreen";
import SearchScreen from "./components/Search/SearchScreen";
import BreweryDetailScreen from "./components/BreweryDetail/BreweryDetailScreen";
import ProfileScreen from "./components/Profile/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
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
    </BrowserRouter>
  );
}

export default App;
