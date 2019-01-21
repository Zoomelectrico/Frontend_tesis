import React from "react";
import axios from "axios";
import { Navbar, Footer } from "../components";
class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
    login: this.props.login
  };

  // University Email check
  checkEmail = email => email.includes("@correo.unimet.edu.ve");
  // Password Strength Check
  checkPass = password => password.length >= 8;

  // On Change Handler
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = async e => {
    e.preventDefault();
    if (
      this.checkEmail(this.state.email) &&
      this.checkPass(this.state.password)
    ) {
      const { email, password } = this.state;
      const {
        data: { success, token, user }
      } = await axios.post("http://localhost:7777/login", {
        email,
        password
      });
      if (success) {
        const _user = { ...user, login: true };
        return this.props.login({ token, user: _user });
      }
      // TODO: Lanzar Error
      console.log("Not Success");
    }
    // TODO: Lanzar Error
    console.log("pass or email bad");
  };

  render() {
    return (
      <>
        <Navbar login={this.props.user.login} />
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title">Iniciar Sesion</h2>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form onSubmit={this.login}>
                <div className="field">
                  <p className="control has-icons-left">
                    <input
                      type="email"
                      className="input"
                      placeholder="p.perez@correo.unimet.edu.ve"
                      name="email"
                      id="email"
                      onChange={this.handleChange}
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
                      placeholder="contraseña"
                      onChange={this.handleChange}
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
        <Footer />
      </>
    );
  }
}

export default SignIn;
