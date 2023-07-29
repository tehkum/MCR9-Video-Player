import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";
import VideoBox from "../components/VideoBox/VideoBox";
import { useState } from "react";

export default function ExplorePage() {
  const { videoState } = useVideos();
  const [searchFilter, setSearchFilter] = useState("");

  const filterer = videoState?.videoData?.filter((vids) =>
    vids?.title?.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="right-side">
      <h2>Explore</h2>
      <input
        type="search"
        placeholder="search"
        onChange={(e) => setSearchFilter(e.target.value)}
        style={{padding: "0.5rem", marginBottom: "0.5rem"}}
      />
      <div className="video-list">
        {filterer?.map((vids) => (
          <VideoBox props={vids} />
        ))}
      </div>
    </div>
  );
}
