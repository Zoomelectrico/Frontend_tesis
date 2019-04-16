import React from "react";
import { inputHelper } from "../form-elements";

const inputs = [
  {
    name: "president",
    title: "Nombre y Apellido del Presidente",
    type: "text"
  },
  {
    name: "generalSecretary",
    title: "Nombre y Apellido del Secretario General",
    type: "text"
  },
  {
    name: "internalAffairs",
    title: "Nombre y Apellido del Secretario de Asuntos Internos",
    type: "text"
  },
  {
    name: "generalCoordinator",
    title: "Nombre y Apellido del Coordinador General",
    type: "text"
  },
  {
    name: "treasurer",
    title: "Nombre y Apellido del Tesorero",
    type: "text"
  }
];
class StudentCenterFederation extends React.Component {
  state = {
    board: true
  };

  handleChange = e => {
    const _state = { ...this.state };
    _state.postulation[e.target.name] = e.target.value;
    this.setState(_state);
  };

  next = e => {
    e.preventDefault();
    this.setState({ board: false });
  };

  render() {
    return (
      <div className="container">
        <h2 className="title has-text-centered">
          Federacion Centro de Estudiantes
        </h2>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {this.state.board ? (
              <>
                {inputs.map(input => inputHelper(input, this.handleChange))}
                <div className="justify-content-center">
                  <button className="button is-info" onClick={this.next}>
                    Siguiente
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="title">Next</h2>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default StudentCenterFederation;
