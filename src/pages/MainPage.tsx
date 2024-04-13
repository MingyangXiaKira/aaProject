import FormComponent from "@/components/FormComponent";
import React from "react";
import Header from "../components/Header.tsx";
import { useState } from "react";
const MainPage = () => {
  const [option, setOption] = useState(1);
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
      <FormComponent />
    </div>
  );
};

export default MainPage;
