import VideoBox from "../components/VideoBox/VideoBox";
import { useWatchLater } from "../context/providers/WatchLaterContext";
import "./HomePage.css";

export default function HomePage() {
  const { watchLaterData } = useWatchLater();
//   console.log(watchLaterData);

  return (
    <div className="right-side">
      <h2>Watch Later</h2>
        {watchLaterData?.map((cat) => (
          <VideoBox props={cat} />
        ))}
    </div>
  );
}
