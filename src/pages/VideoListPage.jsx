import { useParams } from "react-router";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import { useEffect, useState } from "react";
import VideoBox from "../components/VideoBox/VideoBox";

export default function VideoListPage() {
  const { categoryName } = useParams();
  const { videoState } = useVideos();
  const [catVideo, setCatVideo] = useState([]);

  useEffect(() => {
    setCatVideo(
      videoState?.videoData?.filter((vids) => vids?.category === categoryName)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <div className="right-side">
      <h2>{categoryName}</h2>
      <div className="video-list">
        {catVideo?.map((vids) => (
          <VideoBox props={vids} />
        ))}
      </div>
    </div>
  );
}
