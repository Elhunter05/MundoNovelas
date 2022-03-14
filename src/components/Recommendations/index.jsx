import React from "react";

const Recommendations = ({ recommendations }) => {
  return (
    <ul id="recommended-novels">
      {recommendations.map((value) => {
        return (
          <li key={value.id} className={value.priority}>
            {value.id} - {value.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Recommendations;
