import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import VideoListPage from "../pages/VideoListPage";
import VideoPage from "../pages/VideoPage";
import ExplorePage from "../pages/ExplorePage";
import PlaylistPage from "../pages/PlaylistPage";
import WatchLater from "@mui/icons-material/WatchLater";
import Playlist from "../pages/Playlist";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:categoryName/videos" element={<VideoListPage />} />
      <Route path="/:categoryName/video/:videoId" element={<VideoPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/playlist" element={<PlaylistPage />} />
      <Route path="/watchLater" element={<WatchLater />} />
      <Route path="/playlist/:playId" element={<Playlist />} />
    </Routes>
  );
}
