import React from "react";
import Image from "./image";

function SidebarBtn(props) {
  return (
    <div>
      <div className="service__sidebar--menu-image">
        <Image src={props.src} alt={props.name} />
      </div>
      <div className="service__sidebar--menu-item">{props.name}</div>
    </div>
  );
}

export default SidebarBtn;
