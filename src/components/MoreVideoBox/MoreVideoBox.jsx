import "./MoreVideoBox.css";

export default function MoreVideoBox({ props }) {
  return (
    <div className="MoreVideoBox">
      <img src={props?.thumbnail} alt={props?.title} />
      <div>
        <p>
          <b>{props?.title}</b>
        </p>
        <p className="MoreVideoBox-creator">{props?.creator}</p>
      </div>
    </div>
  );
}
