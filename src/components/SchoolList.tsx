import React from "react";
import SchoolItem from "./SchoolItem";
import { useLocation } from "react-router-dom";

const SchoolList = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log("Received data:", data);

  return (
    <div>
      <SchoolItem />
    </div>
  );
};

export default SchoolList;
