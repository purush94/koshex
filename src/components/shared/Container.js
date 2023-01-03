import React from "react";
import "../../style/container.css";

function Container({ title, menu1, menu2, submenu }) {
  return (
    <div className="container">
      <div className="container__header">
        <span>{title}</span>
        <div style={{ display: "flex" }}>
          <div>{menu1}</div>
          <div style={{ marginLeft: "10px" }}>{menu2}</div>
        </div>
      </div>
      <div className="container__body">{submenu}</div>
    </div>
  );
}

export default Container;
