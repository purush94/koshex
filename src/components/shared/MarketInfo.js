import React from "react";
import "../../style/marketInfo.css";

function MarketInfo({ bgColor, textColor, arrow }) {
  return (
    <div className="marketingInfo" style={{ backgroundColor: bgColor }}>
      <span>Market Data</span>
      <p>
        Detailed market data for your APIs, focused on helping you build
        features and provide run-time data with no lag.
      </p>
      <div className="readMore" style={{ color: textColor }}>
        <span>Read More </span>
        <img src={arrow} alt="" />
      </div>
    </div>
  );
}

export default MarketInfo;
