import React from "react";
import { inputHelper } from "../form-elements";

const inputs = [
  {
    name: "name",
    title: "Nombre y Apellido",
    type: "text"
  },
  {
    name: "school",
    title: "Seleccione una Escuela",
    options: [
      { name: "Seleccione una Escuela", value: 0 },
      { name: "Ingenieira de Sistemas", value: 1 },
      { name: "Ingenieria de Produccion", value: 2 },
      { name: "Ingenieria Quimica", value: 3 },
      { name: "Ingenieria Civil", value: 4 },
      { name: "Ingenieria Mecanica", value: 5 },
      { name: "Ingenieria Electrica", value: 6 }
    ],
    type: "select"
  }
];
class facultyCouncil extends React.Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  save = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h2 className="title has-text-centered">Consejo de Facultad</h2>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            {inputs.map(input => inputHelper(input, this.handleChange))}
            <div className="justify-content-center">
              <button className="button is-info" onClick={this.save}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default facultyCouncil;
