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
        {props.login ? (
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/profile">Perfil</Link>
            </div>
            <div className="navbar-item">
              <Link to="/vote">Votar</Link>
            </div>
            <div className="navbar-item">
              <Link to="/postulate">Postular</Link>
            </div>
            <div className="navbar-item">
              <Link to="/results">Resultados</Link>
            </div>
          </div>
        ) : (
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
        )}
        <div className="navbar-end">
          <div className="navbar-item">
            {props.login ? (
              <button
                type="button"
                className="button is-danger"
                onClick={props.logout}
              >
                Cerrar Sesion
              </button>
            ) : (
              <Link to="signin" className="button is-info">
                Iniciar Sesion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
