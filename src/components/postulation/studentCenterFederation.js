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
  },
  {
    name: "group",
    title: "Seleccione un Grupo Electoral",
    options: [
      { name: "Grupo 1", value: 1 },
      { name: "Grupo 2", value: 2 },
      { name: "Grupo 3", value: 3 }
    ],
    type: "select"
  }
];
class StudentCenterFederation extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h2 className="title has-text-centered">
          Federacion Centro de Estudiantes
        </h2>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {inputs.map(input => inputHelper(input, this.handleChange))}
            <div className="justify-content-center">
              <button className="button is-info">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentCenterFederation;
