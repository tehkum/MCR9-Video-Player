import { createContext, useContext, useReducer } from "react";
import { INITIAL_VIDEO } from "../initialData/InitialVideoData";
import { VideoReducer } from "../reducers/VideoReducer";

export const manageVideo = createContext();

export function VideoContext({ children }) {
  const [videoState, videoDispatch] = useReducer(VideoReducer, INITIAL_VIDEO);

  return (
    <manageVideo.Provider value={{ videoState, videoDispatch }}>
      {children}
    </manageVideo.Provider>
  );
}

export const useVideos = () => useContext(manageVideo);
