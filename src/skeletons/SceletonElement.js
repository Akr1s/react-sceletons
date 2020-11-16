import React from "react";
import "./Sceleton.css";

function SceletonElement({ type }) {
  const classes = `sceleton ${type}`;
  return <div className={classes}></div>;
}

export default SceletonElement;
