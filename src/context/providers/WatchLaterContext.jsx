// WatchLaterContext.js

import React, { createContext, useContext, useEffect, useState } from "react";

export const WatchLaterContext = createContext();

export function WatchLaterProvider({ children }) {
  const [watchLaterData, setWatchLaterData] = useState([]);

  // Load watch later data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("watchlater"));
    if (storedData) {
      setWatchLaterData(storedData);
    }
  }, []);

  // Add a video to watch later
  const addToWatchlater = (data) => {
    setWatchLaterData((prevData) => [...prevData, data]);
  };

  // Remove a video from watch later
  const removeFromWatchlater = (data) => {
    setWatchLaterData((prevData) =>
      prevData.filter((item) => item?._id !== data?._id)
    );
  };

  // Save the updated watch later data to localStorage on every change
  useEffect(() => {
    localStorage.setItem("watchlater", JSON.stringify(watchLaterData));
  }, [watchLaterData]);

  return (
    <WatchLaterContext.Provider
      value={{ watchLaterData, removeFromWatchlater, addToWatchlater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}

export function useWatchLater() {
  return useContext(WatchLaterContext);
}
