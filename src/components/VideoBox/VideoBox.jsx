import { useNavigate } from "react-router";
import "./VideoBox.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useVideos } from "../../context/providers/VideoContext";

export default function VideoBox({ props, deleteVid, playlistId }) {
  const navigate = useNavigate();
  const { videoDispatch } = useVideos();

  return (
    <div
      className="video-box"
      onClick={() => navigate(`/${props.category}/video/${props?._id}`)}
    >
      <img
        src={props?.thumbnail}
        alt={props?.title}
        className="vid-box-main-img"
      />
      <div className="video-details-layout">
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
    </div>
  );
}
