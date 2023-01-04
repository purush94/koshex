import React from "react";
import "../style/dashboardCard.css";
import frame from "../assets/assets_MacBook Air M2 - 54_2022-12-27/Frame 35.png";
import ProfileCard from "./ProfileCard";
import ProfileUpdater from "./ProfileUpdater";
import Container from "./shared/Container";
import StoryContainer from "./shared/StoryContainer";
import Sidepane from "./Sidepane";
import MultipleAsset from "./MultipleAsset";
import AddSip from "./AddSip";
import Search from "./Search";
import InvestorDetails from "./InvestorDetails";
import Performance from "./Performance";
import Dropdown from "./shared/Dropdown";

function DashboardCard() {
  return (
    <div className="dashboard__card">
      <div className="dashboard__left">
        <ProfileUpdater />
        <div className="dashboard__container">
          <div className="shared__container">
            <Container title="Your Targets" submenu={<MultipleAsset />} />
          </div>
          <div className="shared__story">
            <StoryContainer />
          </div>
        </div>
        <div className="dashboard__container">
          <div
            className="shared__container"
            style={{ marginTop: "30px", flex: 1 }}
          >
            <Container
              title="Your Performance"
              menu1={<Dropdown label="Sort By" />}
              menu2={<Dropdown label="Filter By" />}
              submenu={<Performance />}
            />
          </div>
        </div>
        <div className="dashboard__container" style={{ marginTop: "30px" }}>
          <div
            className="shared__container"
            style={{ marginTop: "30px", flex: 1 }}
          >
            <Container
              title="Investor Details"
              menu1={<Search />}
              menu2={<img src={frame} alt="" />}
              submenu={<InvestorDetails />}
            />
          </div>
        </div>
        <div className="dashboard__container " style={{ marginTop: "30px" }}>
          <div className="shared__container">
            <Container title="Investor Details" submenu={<AddSip />} />
          </div>
          <div className="shared__story shared__width">
            <StoryContainer />
          </div>
        </div>
      </div>
      <div className="dashboard__right">
        <ProfileCard />
        <div>
          <Sidepane />
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
