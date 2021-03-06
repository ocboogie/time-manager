import React, { Component } from "react";
import firebase from "firebase/app";

import LoginContaier from "./LoginStyles";

export interface Props {
  forgotPassword: () => void;
  loggedIn: () => void;
}

export interface State {
  error: string;
  fields: {
    [key: string]: string;
  };
}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      error: "",
      fields: {
        email: "",
        password: ""
      }
    };
  }

  handleChange = (event: { target: { id: string; value: string } }) => {
    const { target } = event;
    this.setState((prevState: State) => ({
      fields: {
        ...prevState.fields,
        [target.id]: target.value
      }
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.fields.email,
        this.state.fields.password
      )
      .then(() => {
        this.props.loggedIn();
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { email, password } = this.state.fields;

    return (
      <>
        <h4>Login</h4>
        <hr />
        <LoginContaier className="row">
          <form className="col s12" onSubmit={this.handleSubmit} noValidate>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={email}
                  id="email"
                  type="email"
                  onChange={this.handleChange}
                />
                <label className="active" htmlFor="email">
                  Email
                </label>
                <span className="helper-text" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  value={password}
                  id="password"
                  type="password"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <span className="helper-text" />
              </div>
            </div>
            <div className="row error-row">
              <div
                className={`col s12 error ${this.state.error ? "active" : ""}`}
              >
                {this.state.error}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                {/* TODO: work on accessibility */}
                <button
                  type="submit"
                  className="waves-effect waves-light btn-large"
                >
                  Log in
                </button>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                {/* TODO: work on accessibility */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */}
                <a
                  role="button"
                  tabIndex={0}
                  onClick={this.props.forgotPassword}
                  className="forgot-password"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </LoginContaier>
      </>
    );
  }
}
