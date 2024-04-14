import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Avatars from "./Avatars.tsx";
import '../i18n.js';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t } = useTranslation();

  return (
    <nav className=" flex pt-3 justify-between items-center ">
      <div className="p-5 w-20 h-20"></div>
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {t('header.SchoolRecommodationApp')}
        </h1>
      </div>
      <div className="p-5 w-20 h-20"></div>
    </nav>
  );
};

export default Header;
