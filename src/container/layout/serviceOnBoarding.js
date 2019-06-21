import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import AddCompany from "./../../components/serviceProviderOnBoarding/addCompany";
import ChangePassword from "./../../components/serviceProviderOnBoarding/changePassword";
import InputCode from "./../../components/serviceProviderOnBoarding/inputCode";
import RegisterCompany from "./../../components/serviceProviderOnBoarding/registerCompany";

function ServiceOnBoard() {
  return (
    <div className="container">
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-body">
            <section id="number-tabs">
              <div className="row">
                <div className="col-12 text-center">
                  <HashRouter>
                    <Switch>
                      <Route
                        exact
                        path="/service-product/"
                        component={AddCompany}
                      />
                      <Route
                        exact
                        path="/service-product/change_password"
                        component={ChangePassword}
                      />
                      <Route
                        exact
                        path="/service-product/register_company"
                        component={RegisterCompany}
                      />
                      <Route
                        exact
                        path="/service-product/input_code"
                        component={InputCode}
                      />
                    </Switch>
                  </HashRouter>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOnBoard;
