import FormComponent from "@/components/FormComponent";
import React from "react";
import Header from "../components/Header.tsx";

const MainPage = () => {
  return (
    <div className="h-full">
      <Header />
      <FormComponent />
    </div>
  );
};

export default MainPage;
