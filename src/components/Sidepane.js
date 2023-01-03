import React from "react";
import "../style/sidepane.css";
import MarketInfo from "./shared/MarketInfo";
import arrow1 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Arrow 2.png";
import arrow2 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Arrow 3.png";
import arrow3 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Arrow 3_2.png";
import arrow4 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Arrow 4.png";

function Sidepane() {
  return (
    <div className="sidepane">
      <p>Market Insights</p>
      <MarketInfo bgColor={"#f7f9ff"} textColor={"#557aff"} arrow={arrow1} />
      <MarketInfo bgColor={"#fffcf8"} textColor={"#ed9c3a"} arrow={arrow3} />
      <MarketInfo bgColor={"#f8f7ff"} textColor={"#8b55ff"} arrow={arrow2} />
      <MarketInfo bgColor={"#f4fcff"} textColor={"#55adff"} arrow={arrow4} />
    </div>
  );
}

export default Sidepane;
