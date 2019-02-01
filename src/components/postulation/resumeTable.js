import React from "react";
import { Table } from "../";

const options = ["table", "is-fullwidth", "is-hoverable"];
const head = ["Cargo", "Escuela", "Nombre"];
const body = [
  ["Presidente", "Sistemas", "Jose Quevedo"],
  ["Tesorero", "Sistemas", "Germano Rojas"],
  ["Cordianador General", "Sistemas", "Abraham Chang"]
];

const ResumeTable = props => (
  <Table body={body} header={head} options={options} />
);

export default ResumeTable;
