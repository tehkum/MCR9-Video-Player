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
      state?.playlistData?.filter(
        (list) => list?.playlistId !== action?.playId
      );
      return { ...state };

    case "OPEN_MODAL":
      return { ...state, open: true };

    case "CLOSE_MODAL":
      return { ...state, open: false };

    case "CLOSE_EDIT_MODAL":
      return { ...state, openEdit: false };

    case "OPEN_EDIT_MODAL":
      return { ...state, openEdit: true };

    default:
      return { ...state };
  }
};
