import React from "react";
import SchoolItem from "./SchoolItem";
import { useLocation } from "react-router-dom";

const SchoolList = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log("Received data:", data);

  const schools = data
      ? data.prediction
          .map(([name, acceptanceRate, level]) => ({
            name: name,
            acceptanceRate: parseFloat(acceptanceRate.replace("%", "")),
            level: level,
          }))
          .sort((a, b) => b.acceptanceRate - a.acceptanceRate)
      : [];

  return (
    <div>
      {schools.map((school,index)=>(
          <SchoolItem key={index} school={school}/>
      ))}

    </div>
  );
};

export default SchoolList;
