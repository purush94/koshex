import React, { useRef } from "react";
import "../style/performance.css";
import arrow from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Arrow 4.png";

function Performance() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    event.target.value = null;
  };

  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <button className="performance__button" onClick={handleClick}>
        <span>
          Import data to review the performance of your AMCs{" "}
          <img src={arrow} alt="" />
        </span>
      </button>
    </div>
  );
}

export default Performance;
