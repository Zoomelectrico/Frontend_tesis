import React from "react";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  // University Email check
  checkEmail = email => email.includes("@correo.unimet.edu.ve");
  // Password Strength Check
  checkPass = password => password.length >= 8;

  login = () => {
    if (
      this.checkEmail(this.state.email) &&
      this.checkPass(this.state.password)
    ) {
      // TODO: Login logic
      return;
    }
    // TODO: Lanzar Error
  };

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h2 className="title">Iniciar Sesion</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <form>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    type="email"
                    className="input"
                    placeholder="p.perez@correo.unimet.edu.ve"
                    name="email"
                    id="email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </p>
              </div>
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button is-info">Iniciar Sesion</button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
