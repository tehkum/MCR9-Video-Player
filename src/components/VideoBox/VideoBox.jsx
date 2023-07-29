import "./VideoBox.css";

export default function VideoBox({ props }) {
  return (
    <div className="video-box">
      <img src={props?.thumbnail} alt={props?.title} className="vid-box-main-img"/>
      <div className="video-details-layout">
        <img src="https://picsum.photos/200/300" alt="..." />
        <div className="video-details">
          <p className="vid-box-heading"><b>{props?.title}</b></p>
          <p className="vid-cat">{props?.category}</p>
          <p className="vid-views">{props?.views} | {props?.creator}</p>
        </div>
      </div>
    </div>
  );
}
