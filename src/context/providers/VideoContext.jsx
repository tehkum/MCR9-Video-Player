import { createContext, useContext, useReducer } from "react";
import { INITIAL_VIDEO } from "../initialData/InitialVideoData";
import { VideoReducer } from "../reducers/VideoReducer";

export const manageVideo = createContext();

export function VideoContext({ children }) {
  const [videoState, videoDispacth] = useReducer(VideoReducer, INITIAL_VIDEO);


  return (
    <manageVideo.Provider value={{ videoState, videoDispacth }}>
      {children}
    </manageVideo.Provider>
  );
}

export const useVideos = () => useContext(manageVideo);
