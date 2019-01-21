import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h2 className="title">Jose Quevedo</h2>
            <p className="description">
              Email: jose@avilatek.co
              <br />
              Carrera: Ing. Sistemas
              <br />
            </p>
            <Link to="/dashboard/vote" className="button is-info">
              Votar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
