import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import VideoListPage from "../pages/VideoListPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:categoryName/videos" element={<VideoListPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
