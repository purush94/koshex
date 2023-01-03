import React from "react";
import "../style/sidebar.css";
import ship from "../assets/assets_MacBook Air M2 - 54_2022-12-27/ship.png";
import vector from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Vector.png";
import group143 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Group 143.png";
import coins1 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/coins 1.png";
import discount1 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/discount 1.png";
import group170 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Group 170.png";
import vector_2 from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Vector_2.png";
import headphones from "../assets/assets_MacBook Air M2 - 54_2022-12-27/headphones.png";

const DATA = [
  {
    id: "1",
    src: group143,
    title: "Dashboard",
  },
  {
    id: "2",
    src: coins1,
    title: "Investor",
  },
  {
    id: "3",
    src: discount1,
    title: "Offerings",
  },
  {
    id: "4",
    src: group170,
    title: "Reporting",
  },
  {
    id: "5",
    src: vector_2,
    title: "Transactions",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <img alt="ship__logo" src={ship} className="sidebar__logo" />
      <div className="sidebar__toggle">
        <img alt="arrow" src={vector} className="sidebar__vector" />
      </div>
      <div className="sidebar__menu">
        <div>
          {DATA.map((item) => (
            <div className="menu__detail" key={item.id}>
              <div className="icon__container">
                <img src={item.src} alt={item.title} className="menu__icon" />
              </div>
              <span className="menu__title">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="sidebar__support">
          <img src={headphones} alt="support" className="support__icon" />
          <span className="support__text">24/7 Support</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
