import VideoBox from "../components/VideoBox/VideoBox";
// import { useVideos } from "../context/providers/VideoContext";
import { useWatchLater } from "../context/providers/WatchLaterContext";
import "./HomePage.css";

export default function WatchLater() {
    const { watchLaterData } = useWatchLater();
//   const { videoState } = useVideos();
  //   console.log(watchLaterData);

  return (
    <div className="right-side">
      <h2>Watch Later</h2>
      <div className="video-list">
        {watchLaterData?.map((cat) => (
          <VideoBox props={cat} />
        ))}
      </div>
    </div>
  );
}
