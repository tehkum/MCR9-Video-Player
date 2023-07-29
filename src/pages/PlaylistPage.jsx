import PlaylistBox from "../components/CategoryBox/PlaylistBox";
import PlayListModal from "../components/VideoPlayer/PlayListModal";
import { useVideos } from "../context/providers/VideoContext";

export default function PlaylistPage() {
  const { videoState, videoDispatch } = useVideos();

  return (
    <>
      <div className="right-side">
        <h2>Playlists</h2>
        <div className="video-list">
          {videoState?.playlistData?.map((cat) => (
            <PlaylistBox props={cat} />
          ))}
          <span
            style={{
              border: "1px solid grey",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "50px",
              height: "50px",
            }}
            onClick={() => videoDispatch({ type: "OPEN_MODAL" })}
          >
            +
          </span>
        </div>
      </div>
      <PlayListModal show={true} />
    </>
  );
}
