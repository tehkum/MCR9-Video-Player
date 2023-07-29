import { useParams } from "react-router";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import Navbar from "../components/Navbar";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";

export default function VideoListPage() {
  const { categoryId } = useParams();
  const { videoState } = useVideos();

  return (
    <div className="page-layout">
      <Navbar />
      <div className="right-side">
        <h2>Videos</h2>
        <div className="video-list">
          {videoState?.categoryData?.map((cat) => (
            <CategoryBox props={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
