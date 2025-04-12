import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const linkNav = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Navigation = () => {
  return (
    <header id="header" className={s.header}>
      <nav className={s.nav}>
        <NavLink className={linkNav} to="/">
          Home__Page
        </NavLink>
        <NavLink className={linkNav} to="/movies">
          Movie__List
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
