import React from "react";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../style/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
        <DashboardCard />
      </div>
    </div>
  );
}

export default Dashboard;
