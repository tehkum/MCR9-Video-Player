import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

export default function EditPlayListModal({ props }) {
  const { videoState, videoDispatch } = useVideos();
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => {
  //     videoDispatch({ type: "OPEN_EDIT_MODAL" });
  //   };
  const handleClose = () => videoDispatch({ type: "CLOSE_EDIT_MODAL" });
  console.log(videoState?.playlistData);

  return (
    <div style={{ color: "black" }}>
      {/* <Button onClick={handleOpen}>Open modaq</Button> */}
      <Modal
        open={videoState?.openEdit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 style={{ color: "black" }}>EDIT PLAYLIST</h2>
          <div>
            {videoState?.playlistData?.map((list) => (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "black" }}>{list?.playListName}</p>
                <button
                  onClick={() =>
                    videoDispatch({
                      type: "REMOVED_PLAYLIST",
                      playId: list?.playlistId,
                    })
                  }
                >
                  remove
                </button>
              </div>
            ))}
          </div>
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
