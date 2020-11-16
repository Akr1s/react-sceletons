import React from "react";
import SceletonElement from "./SceletonElement";
import Shimmer from "./Shimmer";

function SceletonProfile({ theme }) {
  const themeClass = theme || "light";
  return (
    <div className={`sceleton__wrapper ${themeClass}`}>
      <div className="sceleton__profile">
        <div className="left">
          <SceletonElement type="avatar" />
        </div>
        <div className="right">
          <SceletonElement type="title" />
          <SceletonElement type="text" />
          <SceletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}

export default SceletonProfile;
