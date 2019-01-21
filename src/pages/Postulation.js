import React from "react";
import { Navbar, Footer } from "../components";
import { inputHelper } from "../components/form-elements";
class Postulation extends React.Component {
  state = {
    denomination: "",
    color: "",
    number: 0,
    symbol: "",
    nameRepresentative: "",
    dni: "",
    email: "",
    phone: "",
    inscriptions: {
      electoralGroup: [
        {
          name: "denomination",
          title: "Denominacion",
          type: "text"
        },
        {
          name: "color",
          title: "Color y Numero de Pantone",
          type: "text"
        },
        {
          name: "number",
          title: "Numero",
          type: "number"
        },
        {
          name: "symbol",
          title: "Simbolo",
          type: "file"
        }
      ],
      representative: [
        {
          name: "nameRepresentative",
          title: "Nombre y Apellido",
          type: "text"
        },
        {
          name: "dni",
          title: "Cedula",
          type: "text"
        },
        {
          name: "email",
          title: "Correo Electronico",
          type: "email"
        },
        {
          name: "phone",
          title: "Telefono",
          type: "text"
        }
      ]
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    const {
      denomination,
      color,
      number,
      symbol,
      nameRepresentative,
      dni,
      email,
      phone
    } = this.state;
    const electoralGroup = { denomination, color, number, symbol };
    const representative = {
      electoralGroup: denomination,
      name: nameRepresentative,
      dni,
      email,
      phone
    };
    e.preventDefault();
  };

  // Render Field Forms
  renderFields = field => inputHelper(field, this.handleChange);

  // Render Funciton
  render() {
    return (
      <>
        <Navbar login={this.props.user.login} />
        <div className="container">
          <div className="columns">
            <div className="column has-text-centered">
              <h2 className="title">Postulation</h2>
              <hr />
            </div>
          </div>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form onSubmit={this.submitForm}>
                {/* Grupo Electoral*/}
                <div className="has-text-centered">
                  <h3>Datos del Grupo Electoral</h3>
                </div>
                {this.state.inscriptions.electoralGroup.map(this.renderFields)}
                {/*  Representate Electoral*/}
                <div className="has-text-centered">
                  <h3>Datos del Representante del Electoral</h3>
                </div>
                {this.state.inscriptions.representative.map(this.renderFields)}
                <div className="has-text-centered">
                  <button className="button is-info" type="submit">
                    Inscribir
                  </button>
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

export default Postulation;
