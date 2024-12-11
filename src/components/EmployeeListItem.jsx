import React from "react";
import "./EmployeeListItem.css"; // Ensure you are importing your styles here (if applicable)

function EmployeeListItem({ name, department, salary }) {
  return (
    <li className="employee-item">
      <h3>{name}</h3>
      <p>Department: {department}</p>
      <p>Salary: ${salary}</p>
    </li>
  );
}

export default EmployeeListItem;
