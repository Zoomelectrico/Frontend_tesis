import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <figure className="image has-text-centered">
              <img
                src="https://via.placeholder.com/250"
                alt="Profile Pic"
                className="is-rounded has-shadow profile-pic"
              />
            </figure>
            <h2 className="title">{this.props.user.name}</h2>
            <p className="description">
              <strong>Email:</strong> <a>{this.props.user.email}</a>
              <br />
              <strong>Carrera:</strong> {this.props.user.major}
              <br />
            </p>
            <div className="buttons has-addons is-centered">
              <Link to="/candidate" className="button is-success">
                Candidatos
              </Link>
              <Link to="/vote" className="button is-info">
                Votar
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
