import { useNavigate } from "react-router";
import "./Categorybox.css";

export default function PlaylistBox({ props }) {
  const navigation = useNavigate();

  return (
    <div
      className="category-box"
      onClick={() => navigation(`/playlist/${props?.playlistId}`)}
    >
      <img src="https://picsum.photos/200/300" alt={props?.playlistId} />
      <h3>{props?.playListName}</h3>
    </div>
  );
}
