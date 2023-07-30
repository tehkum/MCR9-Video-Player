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

    case "REMOVED_PLAYLIST":
      return {
        ...state,
        playlistData: state?.playlistData?.filter((list) => {
          return list?.playlistId !== action?.playId;
        }),
      };

    case "DELETE_FROM_PLAYLIST":
      state.playlistData
        .find((list) => list.playlistId === action.listId)
        .playlistVids.filter((list) => list.playId !== action.playId);
      return { ...state };

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
      return {
        ...state,
        videoData: state.videoData.map((vid) =>
          +vid._id === +action.vidId ? { ...vid, notes: action.noteData } : vid
        ),
      };

    case "EDIT_NOTES":
      return {
        ...state,
        videoData: state.videoData.map((vid) =>
          +vid._id === +action.vidId ? { ...vid, notes: action.noteData } : vid
        ),
      };

    case "ADD_TO_WL":
      return {
        ...state,
        watchLaterData: [...state.watchLaterData, action.Video],
      };

    case "REMOVE_FROM_WL":
      return {
        ...state,
        watchLaterData: state.watchLaterData.filter(
          (vid) => vid._id !== action.vidId
        ),
      };

    default:
      return { ...state };
  }
};
