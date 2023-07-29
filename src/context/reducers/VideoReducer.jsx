import { categories } from "../../Data/CategoryData";
import { videos } from "../../Data/VideoData";

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
          { playListName: action?.playlistName, playlistVids: [] },
        ],
      };

    default:
      return { ...state };
  }
};
