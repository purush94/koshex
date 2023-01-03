import React from "react";
import "./../style/header.css";
import magnifier1 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/magnifier 1.png";
import bell from "../assets/assets_MacBook Air M2 - 54_2022-12-27/bell.png";
import avatar from "../assets/assets_MacBook Air M2 - 54_2022-12-27/avatar.png";
import vector from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Vector.png";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <p>Hi, Nandita Thakkannavar!</p>
      </div>
      <div className="header__right">
        <div className="header__iconContainer" style={{ cursor: "pointer" }}>
          <img src={magnifier1} alt="magnifier" className="header__icon" />
        </div>
        <div className="header__iconContainer" style={{ cursor: "pointer" }}>
          <img src={bell} alt="notification" className="header__icon" />
          <img src="" alt="" className="" />
        </div>
        <div className="header__avatarContainer" style={{ cursor: "pointer" }}>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </div>
        <div className="">
          <img alt="arrow" src={vector} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
