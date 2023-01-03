import React from "react";
import "../style/profileUpdater.css";
import dashboard1 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Dashboard img 1.png";
import frame24 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Frame 24.png";

function ProfileUpdater() {
  return (
    <div className="profileUpdater">
      <div className="profileUpdater__left">
        <img src={dashboard1} alt="" className="left__icon" />
      </div>
      <div className="profileUpdater__center">
        <div className="profileUpdater__desc">
          <p>Complete Your Profile To Unlock New Features</p>
        </div>
        <button className="profileUpdater__button">Continue</button>
      </div>
      <div className="profileUpdater__right">
        <img src={frame24} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdater;
