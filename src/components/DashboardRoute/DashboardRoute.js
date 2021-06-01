import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Editorial } from "../../const";
import HeroeApp from "../HeroeApp/HeroeApp";
import HeroesApp from "../HeroesApp/HeroesApp";
import NavbarApp from "../NavbarApp/NavbarApp";

export default class DashboardRoute extends Component {
  render() {
    return (
      <>
        <NavbarApp />
        <div className="container">
          <Switch>
            <Route exact path="/marvel-comic">
              <HeroesApp data={{ editorial: Editorial.M }} />
            </Route>
            <Route exact path="/dc-comic">
              <HeroesApp data={{ editorial: Editorial.D }} />
            </Route>
            <Route exact path="/:editorial/:id">
              <HeroeApp />
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </>
    );
  }
}
