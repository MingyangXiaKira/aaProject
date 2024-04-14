import React, {useEffect} from "react";
import LoginCard from "../components/LoginCard.tsx";
import Header from "../components/Header.tsx";
import {useTranslation} from "react-i18next";

const Login = () => {
    const { i18n } = useTranslation();
    // detect user browser language
    useEffect(() => {
        const browserLanguage = navigator.language;
        const userLanguage = browserLanguage.split('-')[0];

        if (['en', 'hi', 'zh'].includes(userLanguage)) {
            i18n.changeLanguage(userLanguage);
            console.log(i18n.language)
        } else {
            i18n.changeLanguage('en');
            console.log(i18n.language)
        }
    }, [i18n]);

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `linear-gradient(
          310deg,
          hsl(244deg 100% 94%) 0%,
          hsl(276deg 82% 93%) 14%,
          hsl(313deg 86% 93%) 31%,
          hsl(330deg 100% 94%) 48%,
          hsl(348deg 100% 94%) 63%,
          hsl(9deg 100% 94%) 75%,
          hsl(24deg 100% 93%) 85%,
          hsl(36deg 100% 93%) 92%,
          hsl(45deg 100% 93%) 97%,
          hsl(54deg 100% 94%) 100%
        )`,
      }}
    >
      <Header />
      <LoginCard />
    </div>
  );
};

export default Login;
