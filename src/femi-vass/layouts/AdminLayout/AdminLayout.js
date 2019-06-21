import React from "react";
import PropTypes from "prop-types";

import "./AdminLayout.css";
import NavBar from "../../partials/NavBar";
import SideBar from "../../partials/SideBar";

function AdminLayout(props) {
  return (
    <div className="layout-main">
      {props.navbar && <NavBar {...props} />}

      <SideBar {...props} />
      <div className={`content-main ${!props.navbar && "no-header"}`}>
        {props.children}
      </div>
    </div>
  );
}

AdminLayout.defaultProps = {
  navbar: true,
  activeSideBar: ""
};

AdminLayout.propTypes = {
  navbar: PropTypes.bool,
  activeSideBar: PropTypes.string
};

export default AdminLayout;
