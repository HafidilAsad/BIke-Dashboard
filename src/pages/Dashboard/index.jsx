import React from "react";
import Header from "../../components/header";
import ContentDashboard from "../../components/contentDashboard";

const Dashboard = () => {
  return (
    <div style={{ background: "#eeeeee" }}>
      <Header bgHeader="linear-gradient(135deg, rgba(255,255,255,1) 55%, rgba(62,166,238,1) 100%)" />
      <ContentDashboard />
    </div>
  );
};

export default Dashboard;
