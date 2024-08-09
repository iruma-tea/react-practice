import { NavLink, Outlet } from "react-router-dom";
import "./RouterNav.css";

// const isCurrent = ({ isActive, isPending }) => (isActive ? "active" : "");
const isCurrent = ({ isActive }) =>
  isActive
    ? {
        color: "Red",
        fontWeight: "bold",
      }
    : {};

export default function RouterNav() {
  return (
    <>
      {/* <ul>
        <li>
          <NavLink to="/" className={isCurrent}>
            トップ
          </NavLink>
        </li>
        <li>
          <NavLink to="/article" className={isCurrent}>
            公開記事
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={isCurrent}>
            このサイトについて
          </NavLink>
        </li>
      </ul> */}
      <ul>
        <li>
          <NavLink to="/" style={isCurrent}>
            トップ
          </NavLink>
        </li>
        <li>
          <NavLink to="/article" style={isCurrent}>
            公開記事
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={isCurrent}>
            このサイトについて
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
