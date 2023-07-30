import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div style={{borderBottom: '1px solid #666'}}>
      {/* <NavLink to="/">Home</NavLink> */}
      <h2 style={{ textAlign: "center" }}>Video Player</h2>
    </div>
  );
}
