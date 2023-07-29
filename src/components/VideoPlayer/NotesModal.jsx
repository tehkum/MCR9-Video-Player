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

export default function NotesModal({ props, show }) {
  const { videoState, videoDispatch } = useVideos();

  const [notes, setNotes] = React.useState("notes");
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => {
  //     videoDispatch({ type: "OPEN_MODAL" });
  //   };
  const handleClose = () => videoDispatch({ type: "CLOSE_NOTES_MODAL" });
  //   console.log(videoState?.playlistData);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={videoState?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Add Notes</h2>
          <TextField
            id="outlined-basic"
            label="Name"
            // value={newPlaylistData?.playlistName}
            onChange={(e) => setNotes(e.target.value)}
            variant="outlined"
            sx={{ width: "100%", margin: "10px 0" }}
          />
          <Button
            sx={{ width: "100%", backgroundColor: "orangered", color: "white" }}
            onClick={() => {
              videoDispatch({
                type: "ADD_NOTES",
                noteData: notes,
                vidId: props._id,
              });
              handleClose();
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
