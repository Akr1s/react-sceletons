import React from "react";
import SceletonElement from "./SceletonElement";
import Shimmer from "./Shimmer";

function SceletonArticle({ theme }) {
  const themeClass = theme || "light";
  return (
    <div className={`sceleton__wrapper ${themeClass}`}>
      <div className="sceleton__article">
        <SceletonElement type="title" />
        <SceletonElement type="text" />
        <SceletonElement type="text" />
        <SceletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}

export default SceletonArticle;
