import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import CompanyInfo from "./../../components/productOnBoarding/companyinfo";
import Category from "./../../components/productOnBoarding/category";
import Channel from "./../../components/productOnBoarding/channel";
import Content from "./../../components/productOnBoarding/content";
import Payment from "./../../components/productOnBoarding/payment";
import RegisterCompany from "./../../components/productOnBoarding/registerCompany";

function ProductOnBoard() {
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
                        path="/create-product/"
                        component={CompanyInfo}
                      />
                      <Route
                        exact
                        path="/create-product/categories"
                        component={Category}
                      />
                      <Route
                        exact
                        path="/create-product/register-company"
                        component={RegisterCompany}
                      />
                      <Route
                        exact
                        path="/create-product/channels"
                        component={Channel}
                      />
                      <Route
                        exact
                        path="/create-product/content"
                        component={Content}
                      />
                      <Route
                        exact
                        path="/create-product/payment"
                        component={Payment}
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

export default ProductOnBoard;
