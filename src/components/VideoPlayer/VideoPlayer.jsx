import "./VideoPlayer.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function VideoPlayer({ props }) {
  return (
    <div className="video-player">
      <iframe
        // width="560"
        // height="315"
        src={props?.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="video-player-icons">
        <div className="video-player-dets">
          <img src="https://picsum.photos/200/300" alt="..." />
          <h3>{props?.title}</h3>
        </div>
        <div>
          <PlaylistAddIcon />
          <PlaylistRemoveIcon />
          <WatchLaterIcon />
        </div>
      </div>
    </div>
  );
}
