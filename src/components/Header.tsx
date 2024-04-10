import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../components/Logo.tsx"
import styles from "./Header.module.css";
const Header = () => {
    return (
        <nav className={styles.nav}>
            <Logo />
            <ul>
                <li>
                    <NavLink to="/main">Main Page</NavLink>
                </li>
                <li>
                    <NavLink to="/schools">Schools</NavLink>
                </li>
                <li>
                    <NavLink to="/" >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
