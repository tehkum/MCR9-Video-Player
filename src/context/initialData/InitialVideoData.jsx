import { categories } from "../../Data/CategoryData";
import { videos } from "../../Data/VideoData";

export const INITIAL_VIDEO = {
  videoData: [...videos],
  categoryData: [...categories],
  playlistData: [],
  open: false,
  openEdit: false,
};
