import "./Navbar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
        }}
      >
        <HomeIcon />
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/explore"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
        }}
      >
        <ExploreIcon /> <p>Explore</p>
      </NavLink>
      <NavLink
        to="/playlist"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
        }}
      >
        <PlaylistAddIcon />
        <p>Playlists</p>
      </NavLink>
      <NavLink
        to="/watchLater"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
        }}
      >
        <WatchLaterIcon /> <p>Watch Later</p>
      </NavLink>
    </div>
  );
}
