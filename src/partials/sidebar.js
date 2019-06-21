import React from "react";

import SidebarBtn from "./sidebarBtn";

function SideBar(props) {
  return (
    <div className="service__sidebar">
      <div className="service__sidebar--nav">
        <SidebarBtn
          src={require("./../container/assets/images/dashboard-icon-white.svg")}
          name={"Dashboard"}
        />
        <SidebarBtn
          src={require("./../container/assets/images/services-icon-white.svg")}
          name={"Services"}
        />
        <SidebarBtn
          src={require("./../container/assets/images/settings-icon-white.svg")}
          name={"Settings"}
        />
        <SidebarBtn
          src={require("./../container/assets/images/logout-icon-white.svg")}
          name={"Logout"}
        />
      </div>
    </div>
  );
}

export default SideBar;
