import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo.tsx";
import styles from "./Header.module.css";
import Avatars from "./Avatars.tsx";
const Header = () => {
  return (
    <nav className=" flex justify-between	h-1/5">
      <Logo />
      <div className="p-5">
        <Avatars />
      </div>
    </nav>
  );
};

export default Header;
