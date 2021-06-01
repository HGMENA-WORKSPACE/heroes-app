import React, { Component } from "react";
import { LANGUAGES } from "../../langs/esp";
import { LoadServices } from "../../services/LoadServices/LoadServices";

export default class HeroeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroe: props.heroe,
      lazy: true,
    };
  }
  render() {
    if (!this.state.heroe) {
      this.loadHero();
    }
    return (
      <>
        <div
          className="card bg-dark border-light m-3"
          style={{ width: "20rem" }}
        >
          <img
            src={this.state.heroe ? this.state.heroe.images.sm : null}
            className="card-img-top pt-3"
            alt="..."
          />
          <h2 className="card-title" style={{ textAlign: "center" }}>
            {this.state.heroe ? this.state.heroe.name : null}
          </h2>
          <div className="card-body d-grid">
            <p className="card-text">
              <b> {LANGUAGES.HEROEAPP.APPEARANCE.GENDER} </b>
              {this.state.heroe ? this.state.heroe.appearance.gender : null}
            </p>
            <p className="card-text">
              <b> {LANGUAGES.HEROEAPP.ALIGNMENT} </b>
              {this.state.heroe ? this.state.heroe.biography.alignment : null}
            </p>
            <p className="card-text">
              <b> {LANGUAGES.HEROEAPP.FULLNAME} </b>
              {this.state.heroe ? this.state.heroe.biography.fullName : null}
            </p>
            <p className="card-text">
              <b> {LANGUAGES.HEROEAPP.APPEARANCE.RACE} </b>
              {this.state.heroe ? this.state.heroe.appearance.race : null}
            </p>
            <button
              href="#"
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handlerNavigation}
            >
              <span> {this.state.lazy ? LANGUAGES.HEROEAPP.WATCH : LANGUAGES.HEROEAPP.BACK } </span>
            </button>
          </div>
        </div>
      </>
    );
  }
  loadHero() {
    if (this.props.heroe) {
      this.setState(this.props.heroe);
    } else {
      const [path, route, id] = window.location.pathname.split("/");
      new LoadServices()
        .loadHeroe(id)
        .then((res) => {
          this.setState({ heroe: res, lazy: false });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  handlerNavigation = () => {
    let [path, route] = window.location.pathname.split("/");
    path = "/";
    if (this.state.lazy) {
      window.location.assign(`${path}${route}${path}${this.state.heroe.id}`);
    } else {
      window.location.assign(`/${route}`);
    }
  };
}
