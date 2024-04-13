import React from "react";
import SchoolItem from "./SchoolItem";
import { useLocation } from "react-router-dom";

const SchoolList = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log("Received data:", data);

  const fakeData = {
    schools: [
      { name: "School A", acceptanceRate: 80 },
      { name: "School B", acceptanceRate: 65 },
      { name: "School C", acceptanceRate: 90 },
      { name: "School D", acceptanceRate: 75 },
    ],
  };
  return (
    <div>
      {fakeData && fakeData.schools.map((school,index)=>(
          <SchoolItem key={index} school={school}/>
      ))}

    </div>
  );
};

export default SchoolList;
