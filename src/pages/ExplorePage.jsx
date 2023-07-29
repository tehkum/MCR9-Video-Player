import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import VideoBox from "../components/VideoBox/VideoBox";

export default function ExplorePage() {
  const { videoState } = useVideos();

  return (
    <div className="right-side">
      <h2>Explore</h2>
      <div className="video-list">
        {videoState?.videoData?.map((vids) => (
          <VideoBox props={vids} />
        ))}
      </div>
    </div>
  );
}
