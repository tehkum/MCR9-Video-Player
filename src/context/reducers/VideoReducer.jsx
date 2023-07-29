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

    default:
      return { ...state };
  }
};
