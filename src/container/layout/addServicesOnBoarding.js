import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import NavigationBar from "./../../partials/navigation";
import SideBar from "./../../partials/sidebar";

import AddServices from "./../../components/addServices/addservices";

function AddServicesOnBoard() {
  return (
    <div className="service__background">
      <NavigationBar />
      <SideBar />
      <HashRouter>
        <Switch>
          <Route exact path="/add-services/" component={AddServices} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default AddServicesOnBoard;
