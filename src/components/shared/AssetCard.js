import { Slider } from "@mui/material";
import React, { useState } from "react";
import "../../style/assetcard.css";

function AssetCard({ title, icon, desc, comp, bgColor }) {
  const [target, setTarget] = useState(true);
  const [value, setValue] = useState(0);
  const handleChange = () => {
    setTarget(false);
  };
  const handleSubmit = () => {
    setTarget(true);
    setValue(0);
  };

  const sliderValue = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="assetcard">
      <div>
        <div className="cardleft__top">
          <div className="cardleft__icon" style={{ backgroundColor: bgColor }}>
            <img src={icon} alt="" />
          </div>
          <span className="cardtop__title">{title}</span>
        </div>
        <div className="cardleft__bottom">
          <p>
            {target ? (
              desc
            ) : (
              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                value={value}
                onChange={sliderValue}
                size={"small"}
                sx={{ marginLeft: "5px", marginTop: "0px" }}
              />
            )}
          </p>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {target && (
          <div className="set__target">
            <button onClick={handleChange}>Set Target</button>
          </div>
        )}
        {!target && (
          <div className="total">
            <div className="total__top">
              <button className="total__button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div className="total__sum">
              <span>{value}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AssetCard;
