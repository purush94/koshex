import React, { useRef } from "react";
import "../style/addsip.css";

function AddSip() {
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
    <div className="addsip">
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <button className="addsip__button" onClick={handleClick}>
        <p>+</p>
        <p>Add Your SIPs</p>
      </button>
    </div>
  );
}

export default AddSip;
