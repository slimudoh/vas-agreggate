import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/app.css";

import ProductOnBoard from "./layout/productOnBoarding";
import ServiceOnBoard from "./layout/serviceOnBoarding";
import AddServicesOnBoard from "./layout/addServicesOnBoarding";
import NotFound from "./../components/notFound";

// import routes container from femi-vass route component

import Routes from "../femi-vass/routes";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/create-product" />}
        />
        <Route path="/create-product" component={ProductOnBoard} />
        <Route path="/service-product" component={ServiceOnBoard} />
        <Route path="/add-services" component={AddServicesOnBoard} />

        <Routes />

        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
