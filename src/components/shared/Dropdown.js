import React from "react";
import "../../style/dropdown.css";

function Dropdown({ label }) {
  return (
    <div>
      <select id="dropdown" name="Filter By" className="dropdown">
        <option value="N/A">{label}</option>
        <option value="1">Alphabetically</option>
        <option value="2">Newest</option>
        <option value="3">Oldest</option>
        <option value="4">Order ID</option>
      </select>
    </div>
  );
}

export default Dropdown;
