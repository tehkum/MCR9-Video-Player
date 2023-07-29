import CategoryBox from "../components/CategoryBox/CategoryBox";
import { useVideos } from "../context/providers/VideoContext";
import "./HomePage.css";

export default function HomePage() {
  const { videoState } = useVideos();

  return (
        <div className="right-side">
            <h2>Categories</h2>
            <div className="video-list">
                {videoState?.categoryData?.map(cat=> <CategoryBox props={cat}/>)}
            </div>
        </div>
  );
}
