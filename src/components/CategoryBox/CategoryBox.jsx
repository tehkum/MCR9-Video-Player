import { useNavigate } from "react-router";
import "./Categorybox.css";

export default function CategoryBox({ props }) {
  const navigation = useNavigate();

  return (
    <div
      className="category-box"
      onClick={() => navigation(`/${props._id}/videos`)}
    >
      <img src={props?.thumbnail} alt={props?._id} />
      <h3>{props?.category}</h3>
    </div>
  );
}
