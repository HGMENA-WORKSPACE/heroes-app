import React, { Component } from "react";
import { LANGUAGES } from "../../langs/esp";

export default class LoginApp extends Component {
  render() {
    return (
      <>
        <div className="container p-5 m-5">
          <div className="card bg-dark border-light">
            <div className="card-body p-3 m-3">
              <h1>{LANGUAGES.LOGIN.TITLE}</h1>
              <form className="pt-5">
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    {LANGUAGES.LOGIN.INPUTEMAIL}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    {LANGUAGES.LOGIN.EMAILHELP}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    {LANGUAGES.LOGIN.PASSWORD}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck">
                    {LANGUAGES.LOGIN.REMENBER}
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.onClick()}
                >
                  {LANGUAGES.LOGIN.SUBMIT}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  onClick() {
    // window.location.replace('/');
    console.log(window);
  }
}
