import React from "react";
import s from "../style/header_style.module.css";
import { NavLink } from "react-router-dom";
export default function () {
  return (
    <header>
      <h1>Maxvel</h1>
      <nav className={s.navigation}>
        <NavLink className={s.nav_link} to="/news">
          News
        </NavLink>
        <NavLink className={s.nav_link} to="/weather">
          Weather
        </NavLink>
        <NavLink className={s.nav_link} to="/blog">
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
