import { useNavigate } from "react-router";
import "./MoreVideoBox.css";

export default function MoreVideoBox({ props }) {
  const navigate = useNavigate();

  return (
    <div
      className="MoreVideoBox"
      onClick={() => navigate(`/${props?.category}/video/${props?._id}`)}
    >
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
