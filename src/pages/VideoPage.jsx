import { useParams } from "react-router";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import MoreVideoBox from "../components/MoreVideoBox/MoreVideoBox";
import PlayListModal from "../components/VideoPlayer/PlayListModal";
import EditPlayListModal from "../components/VideoPlayer/EditPlaylistModal";
import NotesModal from "../components/VideoPlayer/NotesModal";

export default function VideoPage() {
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideos();
  const [video, setVideo] = useState({});
  // const [notes, setNotes] = useState("");

  useEffect(() => {
    setVideo(videoState?.videoData?.find((vids) => +vids?._id === +videoId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId, videoState?.videoData]);

  return (
    <>
      <div className="videopage-list">
        <div className="video-tab">
          <VideoPlayer props={video} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "800px",
              alignItems: "center",
            }}
          >
            <h3>Notes</h3>
            {video.notes ? <span
              style={{ border: "1px solid black" }}
              onClick={() => videoDispatch({ type: "OPEN_NOTES_MODAL" })}
            >
              <b>Edit Notes</b>
            </span> : <span
              style={{ border: "1px solid black" }}
              onClick={() => videoDispatch({ type: "OPEN_NOTES_MODAL" })}
            >
              <b>Add Notes</b>
            </span>}
          </div>
          <div className="video-notes">{video?.notes}</div>
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
      <NotesModal props={video} />
    </>
  );
}
