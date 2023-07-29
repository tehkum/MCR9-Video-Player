import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useVideos } from "../../context/providers/VideoContext";
import "./VideoPlayer.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PlayListModal({ props }) {
  const { videoState, videoDispatch } = useVideos();
  const playListInit = {
    playlistName: "",
    playlistDesc: "",
  };
  const [newPlaylistData, setPlaylistData] = React.useState(playListInit);
  //   const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    videoDispatch({ type: "OPEN_MODAL" });
  };
  const handleClose = () => videoDispatch({ type: "CLOSE_MODAL" });
  //   console.log(videoState?.playlistData);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={videoState?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add To Playlist</h2>
          <p>Create New Playlist</p>
          <TextField
            id="outlined-basic"
            label="Name"
            // value={newPlaylistData?.playlistName}
            onChange={(e) =>
              setPlaylistData({
                ...newPlaylistData,
                playlistName: e.target.value,
              })
            }
            variant="outlined"
            sx={{ width: "100%", margin: "10px 0" }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            onChange={(e) => {
              setPlaylistData({
                ...newPlaylistData,
                playlistDesc: e.target.value,
              });
            }}
            // value={newPlaylistData?.playlistDesc}
            variant="outlined"
            sx={{ width: "100%", margin: "10px 0" }}
          />
          <button
            className="create-new-button"
            onClick={() => {
              videoDispatch({
                type: "NEW_PLAYLIST",
                playlistName: newPlaylistData?.playlistName,
                playlistDesc: newPlaylistData?.playlistDesc,
              });
              setPlaylistData(playListInit);
            }}
          >
            Create New
          </button>
          <p>or</p>
          <p>Add To Existing Playlist</p>
          <ol>
            {videoState?.playlistData?.map((list) => (
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{list?.playListName}</p>
                <button
                  onClick={() =>
                    videoDispatch({
                      type: "ADD_TO_PLAYLIST",
                      video: { ...props },
                      playId: list?.playlistId,
                    })
                  }
                >
                  Add
                </button>
              </li>
            ))}
          </ol>
          <Button
            sx={{ width: "100%", backgroundColor: "orangered", color: "white" }}
            onClick={() => {
              handleClose();
            }}
          >
            Done
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
