import { useNavigate } from "react-router";
import "./VideoBox.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useVideos } from "../../context/providers/VideoContext";
import WatchLaterOutlined from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useWatchLater } from "../../context/providers/WatchLaterContext";

export default function VideoBox({ props, deleteVid, playlistId }) {
  const navigate = useNavigate();
  const { videoDispatch } = useVideos();
  const { watchLaterData, removeFromWatchlater, addToWatchlater } =
    useWatchLater();

  return (
    <div
      className="video-box"
    >
      <img
        src={props?.thumbnail}
        alt={props?.title}
      onClick={() => navigate(`/${props.category}/video/${props?._id}`)}
      className="vid-box-main-img"
      />
      <div className="video-details-layout"
      onClick={() => navigate(`/${props.category}/video/${props?._id}`)}
      >
        <img src="https://picsum.photos/200/300" alt="..." />
        <div className="video-details">
          <p className="vid-box-heading">
            <b>{props?.title}</b>
          </p>
          <p className="vid-cat">{props?.category}</p>
          <p className="vid-views">
            {props?.views} | {props?.creator}
          </p>
        </div>
      </div>
      {deleteVid && (
        <div
          className="delete-btn"
          onClick={() =>
            videoDispatch({
              type: "DELETE_FROM_PLAYLIST",
              playId: props.vidId,
              listId: playlistId,
            })
          }
        >
          <DeleteIcon />
        </div>
      )}
      {watchLaterData?.find((item) => item?._id === props?._id) ? (
        <div className="wl-btn" onClick={() => removeFromWatchlater(props)}>
          <WatchLaterIcon />
        </div>
      ) : (
        <div className="wl-btn" onClick={() => addToWatchlater(props)}>
          <WatchLaterOutlined />
        </div>
      )}
    </div>
  );
}
