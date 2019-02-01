import React from "react";
import { Navbar, Table, Footer } from "../components";

const options = ["table", "is-fullwidth", "is-hoverable"];
const head = ["Cargo", "Escuela", "Nombre"];
const groups = [
  {
    title: "Grupo 1",
    candidatos: [
      ["Presidente", "Sistemas", "Jose Quevedo"],
      ["Tesorero", "Sistemas", "Germano Rojas"],
      ["Coordinador", "Sistemas", "Abraham Chang"]
    ]
  },
  {
    title: "Grupo 2",
    candidatos: [
      ["Presidente", "Sistemas", "Jose Quevedo"],
      ["Tesorero", "Sistemas", "Germano Rojas"],
      ["Coordinador", "Sistemas", "Abraham Chang"]
    ]
  }
];

const Candidates = props => (
  <>
    <Navbar login={props.user.login} logout={props.logout} />
    <div className="container">
      {groups.map(group => (
        <div className="columns" key={group.title.replace(" ", "")}>
          <div className="column">
            <h2 className="has-text-centered title">{group.title}</h2>
            <Table
              body={group.candidatos}
              header={head}
              key={group.title.replace(" ", "")}
              options={options}
            />
          </div>
        </div>
      ))}
    </div>
    <Footer />
  </>
);

export default Candidates;
