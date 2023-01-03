import React from "react";
import "../style/profileCard.css";
import mail from "../assets/assets_MacBook Air M2 - 54_2022-12-27/mail.png";
import phone from "../assets/assets_MacBook Air M2 - 54_2022-12-27/phone.png";

const DATA = [
  {
    id: "1",
    name: "Manager Name",
    email: "Dashboard",
    phone: "",
  },
];

function ProfileCard() {
  //   const initials = DATA.name
  //     .split(" ")
  //     .map((n) => n[0])
  //     .join("");
  return (
    <div className="profilecard">
      <div className="profilecard__header">
        <span>Your Manager</span>
      </div>
      <div className="profilecard__details">
        <div className="profilecard__initials">
          <div className="profilecard__icon">MN</div>
          <span className="profilecard__name">Manager Name</span>
        </div>
        <div className="profilecard__detail">
          <img src={mail} alt="email" className="" />
          <span className="profilecard__info">managername17@gmail.com</span>
        </div>
        <div className="profilecard__detail">
          <img src={phone} alt="phone" className="" />
          <span className="profilecard__info">+91 9876543210</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
