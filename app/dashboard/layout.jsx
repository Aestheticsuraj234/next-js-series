import React from "react";

const DashboardLayout = ({ children, metrics, notification, team }) => {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            padding: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div>{metrics}</div>
          <div>{notification}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            padding: "10px",
            backgroundColor: "#f0f0f0",
          }}
        >
          <div>{team}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
