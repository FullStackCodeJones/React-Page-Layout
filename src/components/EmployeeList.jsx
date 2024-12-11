import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import "./EmployeeList.css";

function EmployeeList() {
  return (
    <div className="employee-list">
      <ol>
        <EmployeeListItem
          name="Shawn Jones"
          department="Gas Turbine Systems"
          salary={90000}
        />
        <EmployeeListItem
          name="Randi Jones"
          department="Software Development"
          salary={100000}
        />
        <EmployeeListItem
          name="Le'Van Ireland"
          department="Business Marketing"
          salary={70000}
        />
        <EmployeeListItem
          name="Le'Anni Ireland"
          department="Cuteness Handling"
          salary={0}
        />
        <EmployeeListItem
          name="La'el Alston"
          department="HomeSchool"
          salary={0}
        />
        <EmployeeListItem
          name="Lehana Alston"
          department="HomeSchool"
          salary={0}
        />
        <EmployeeListItem
          name="Christopher  Baca Jr"
          department="Cuteness Team"
          salary={0}
        />
        {/* Add more EmployeeListItem components as needed */}
      </ol>
      {/* Add <EmployeeListItem /> components here */}
    </div>
  );
}

export default EmployeeList;
