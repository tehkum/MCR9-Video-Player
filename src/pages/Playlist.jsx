import { useParams } from "react-router";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import { useEffect, useState } from "react";
import VideoBox from "../components/VideoBox/VideoBox";

export default function Playlist() {
  const { playId } = useParams();
  const { videoState } = useVideos();
  const [playList, setPlaylist] = useState([]);

  useEffect(() => {
    setPlaylist(
      videoState?.playlistData?.find((vids) => vids?.playlistId === playId)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playId]);

  return (
    <div className="right-side">
      <h2>{playList?.playListName}</h2>
      <div className="video-list">
        {playList?.playlistVids?.map((vids) => (
          <VideoBox props={vids} deleteVid={true} playlistId={playId} />
        ))}
      </div>
    </div>
  );
}
