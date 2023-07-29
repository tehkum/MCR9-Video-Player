import React from "react";
import "./VideoPlayer.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { useVideos } from "../../context/providers/VideoContext";
import { useWatchLater } from "../../context/providers/WatchLaterContext";

export default function VideoPlayer({ props }) {
  const { videoDispatch } = useVideos();
  const { removeFromWatchlater, addToWatchlater, watchLaterData } =
    useWatchLater();

  return (
    <div className="video-player">
      <iframe
        src={props?.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="video-player-icons">
        <div className="video-player-dets">
          <img src="https://picsum.photos/200/300" alt="..." />
          <h3>{props?.title}</h3>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <div onClick={() => videoDispatch({ type: "OPEN_MODAL" })}>
            <PlaylistAddIcon />
          </div>
          <div onClick={() => videoDispatch({ type: "OPEN_EDIT_MODAL" })}>
            <PlaylistRemoveIcon />
          </div>
          { watchLaterData?.find((item) => item?._id === props?._id) ? (
            <div onClick={() => removeFromWatchlater(props)}>
              <WatchLaterIcon />
            </div>
          ) : (
            <div onClick={() => addToWatchlater(props)}>
              <WatchLaterOutlinedIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
