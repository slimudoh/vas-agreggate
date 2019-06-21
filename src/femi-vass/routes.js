import React from "react";
import { Route } from "react-router-dom";
import CreateCategory from "./AdminComponents/CreateCategory";
import Services from "./AdminComponents/Services";
import Account from "./AdminComponents/account";
import AccountView from "./AdminComponents/accountView";

import "./style/default.css";

const Routes = () => (
  <div className={"femi-controller"}>
    <Route exact path="/admin" component={Services} />
    <Route exact path="/admin/add" component={CreateCategory} />
    <Route exact path="/admin/account" component={Account} />
    <Route exact path="/admin/account/:slug" component={AccountView} />
  </div>
);

export default Routes;
