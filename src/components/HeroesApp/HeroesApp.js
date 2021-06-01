import React, { Component } from "react";
import { Editorial } from "../../const";
import { LoadServices } from "../../services/LoadServices/LoadServices";
import HeroeApp from "../HeroeApp/HeroeApp";

export default class HeroesApp extends Component {
  heroesAppCollection = [];
  heroes;
  constructor(props) {
    super(props);
    this.state = {
      heroes: null,
      lazy: true,
    };
  }
  render() {
    if (this.state.lazy) {
      this.loadHeroes();
    } else  {
      this.buildHeroScreen();
    }
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          {this.props && this.props.data && this.state.heroes && this.state.heroes.length
            ? this.props.data.editorial + " Comic"
            : null}
        </h1>
        <div className="row">{this.heroesAppCollection}</div>
      </>
    );
  }
  loadHeroes() {
    new LoadServices().loadHeroes().then((res) => {
      this.setState({ heroes: res, lazy: false });
      this.buildHeroScreen();
    });
  }
  buildHeroScreen() {
    this.heroesAppCollection.length = 0;
    this.heroes = this.state.heroes.filter((h) => {
      return h.biography.publisher
        ? h.biography.publisher.startsWith(this.props.data.editorial)
        : h;
    });
    this.heroes.forEach((element) => {
      this.heroesAppCollection.push(
        React.createElement(HeroeApp, { heroe: element, key: element.id })
      );
    });
    return this.heroesAppCollection;
  }
}
