import React from "react";
import {
  File,
  Gear,
  Group,
  Level,
  Logout
} from "../../components/common/customIcon";
import { Icon } from "../../components/common";

function SideBar(props) {
  return (
    <div className="side-bar">
      <div className="brand">Telecomme</div>
      <ul>
        <li>
          <div>
            <Level size={"30px"} />
          </div>
          Dashboard
        </li>
        <li className={props.activeSideBar === "account" ? "active" : ""}>
          <div>
            <Group size={"30px"} />
          </div>
          Accounts
        </li>
        <li className={props.activeSideBar === "subscribers" ? "active" : ""}>
          <div>
            <Icon size={40} name={"ic_supervisor_account"} type={"md"} />
          </div>
          Subscribers
        </li>
        <li>
          <div>
            <File size={"30px"} />
          </div>
          Services
        </li>
        <li>
          <div>
            <Gear size={"30px"} />
          </div>
          Settings
        </li>
        <li>
          <div>
            <Logout size={"30px"} />
          </div>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
