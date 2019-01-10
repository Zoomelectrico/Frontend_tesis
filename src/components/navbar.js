import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <header>
    <nav className="navbar has-shadow is-spaced is-fixed-top is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h2>Vota UNIMET</h2>
        </Link>
        <div className="navbar-burger burger" data-target="navbar">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/about">Acerca de</Link>
          </div>
          <div className="navbar-item">
            <Link to="/documents">Documentos</Link>
          </div>
          <div className="navbar-item">
            <Link to="/postulation">Postulacion</Link>
          </div>
          <div className="navbar-item">
            <Link to="/results">Resultados</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="signin" className="button is-info">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
