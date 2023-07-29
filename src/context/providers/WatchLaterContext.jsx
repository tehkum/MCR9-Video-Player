// WatchLaterContext.js

import React, { createContext, useContext, useState } from "react";

export const WatchLaterContext = createContext();

export function WatchLaterProvider({ children }) {
  const [watchLaterData, setWatchLaterData] = useState([]);

  const addToWatchlater = (data) => {
    setWatchLaterData([...watchLaterData, { ...data }]);
  };

  const removeFromWatchlater = (data) => {
    watchLaterData?.filter((item) => +item._id === +data._id);
    setWatchLaterData([...watchLaterData]);
  };

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
