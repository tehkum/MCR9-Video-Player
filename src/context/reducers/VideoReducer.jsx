import { categories } from "../../Data/CategoryData";
import { videos } from "../../Data/VideoData";
import { v4 as uuid } from "uuid";

export const VideoReducer = (state, action) => {
  switch (action.type) {
    case "VIDEODATA_INITIAL":
      return {
        ...state,
        videoData: videos,
        categoryData: categories,
      };

    case "NEW_PLAYLIST":
      return {
        ...state,
        playlistData: [
          ...state?.playlistData,
          {
            playlistId: uuid(),
            playListName: action?.playlistName,
            playListDesc: action?.playlistDesc,
            playlistVids: [],
          },
        ],
      };

    case "ADD_TO_PLAYLIST":
      state?.playlistData
        .find((item) => item?.playlistId === action?.playId)
        .playlistVids.push({ ...action?.video, vidId: uuid() });
      return { ...state };

    // Inside your reducer:
    case "REMOVED_PLAYLIST":
      const updatedPlaylistData = state?.playlistData?.filter((list) => {
        console.log("list.playlistId:", list.playlistId);
        console.log("action.playId:", action.playId);
        return list?.playlistId !== action?.playId;
      });
      return { ...state, playlistData: updatedPlaylistData };

    case "OPEN_MODAL":
      return { ...state, open: true };

    case "CLOSE_MODAL":
      return { ...state, open: false };

    case "CLOSE_EDIT_MODAL":
      return { ...state, openEdit: false };

    case "OPEN_EDIT_MODAL":
      return { ...state, openEdit: true };

    case "OPEN_NOTES_MODAL":
      return { ...state, openNotes: true };

    case "CLOSE_NOTES_MODAL":
      return { ...state, openNotes: false };

    case "ADD_NOTES":
      state.videoData.find((vid) => +vid._id === +action.vidId).notes = [
        ...state?.videoData?.find((vid) => +vid._id === +action.vidId)?.notes,
        action.noteData,
      ];
      return { ...state };

    default:
      return { ...state };
  }
};
