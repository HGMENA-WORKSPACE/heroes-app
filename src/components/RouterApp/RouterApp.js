import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./RouterApp.css";
import LoginApp from "../LoginApp/LoginApp";
import DashboardRoute from "../DashboardRoute/DashboardRoute";

export class RouterApp extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginApp />
          </Route>
          <Route path="/">
            <DashboardRoute />
          </Route>
        </Switch>
      </Router>
    );
  }
}
