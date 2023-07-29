import { useParams } from "react-router";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import MoreVideoBox from "../components/MoreVideoBox/MoreVideoBox";
import PlayListModal from "../components/VideoPlayer/PlayListModal";
import EditPlayListModal from "../components/VideoPlayer/EditPlaylistModal";

export default function VideoPage() {
  const { categoryName, videoId } = useParams();
  const { videoState } = useVideos();
  const [video, setVideo] = useState({});

  useEffect(() => {
    setVideo(videoState?.videoData?.find((vids) => +vids?._id === +videoId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  return (
    <>
      <div className="videopage-list">
        <div className="video-tab">
          <VideoPlayer props={video} />
        </div>
        <div className="more-vids">
          <h2>More Videos:</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {videoState?.videoData?.map((vids) => (
              <MoreVideoBox props={vids} />
            ))}
          </div>
        </div>
      </div>
      <PlayListModal props={video} />
      <EditPlayListModal />
    </>
  );
}
