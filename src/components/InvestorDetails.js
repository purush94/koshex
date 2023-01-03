import React, { useRef } from "react";
import "../style/investordetails.css";

function InvestorDetails() {
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
    <div className="investor__details">
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <button className="investor__button" onClick={handleClick}>
        Add Investor
      </button>
      <span
        style={{
          fontFamily: "SFProDisplay",
          display: "flex",
          alignItems: "center",
          fontSize: "11px",
          padding: "0px 6px",
        }}
      >
        Or
      </span>
      <button className="investor__button" onClick={handleClick}>
        Upload File
      </button>
    </div>
  );
}

export default InvestorDetails;
