import "./styles.css";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore/Explore";
import { Playlist } from "./Pages/Playlist/Playlist";
import { Watchlater } from "./Pages/Watchlater/Watchlater";
import { SingleCategoryPage } from "./Pages/SingleCategoryPage";
import { SingleVideoPage } from "./Pages/SingleVideoPage";

export default function App() {
  return (
    <div className="App">
      <div className="manuSection">
        <NavLink className="Nav" to="/">
          Home
        </NavLink>
        <NavLink className="Nav" to="/Explore">
          Explore
        </NavLink>
        <NavLink className="Nav" to="/Playlist">
          Playlist
        </NavLink>
        <NavLink className="Nav" to="/Watchlater">
          Watchlater
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Playlist" element={<Playlist />} />
        <Route path="/Watchlater" element={<Watchlater />} />
        <Route path="/SingleCategoryPage" element={<SingleCategoryPage />} />
        <Route path="/SingleVideoPage" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}
