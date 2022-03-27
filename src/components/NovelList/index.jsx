import React from "react";

const NovelList = ({ novelList }) => {
  return (
    <ul id="novels-list">
      {novelList.map((value) => {
        return (
          <li key={value.id} className={value.genre}>
            {value.id} - {value.novel}
          </li>
        );
      })}
    </ul>
  );
};

export default NovelList;
