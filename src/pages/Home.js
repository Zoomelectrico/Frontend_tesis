import React from "react";
import { Navbar, Footer } from "../components";

const Home = props => (
  <>
    <Navbar login={props.user.login} />
    <div className="hero is-medium slant">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Lorem, ipsum dolor.</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            sunt!
          </p>
        </div>
      </div>
    </div>
    <div className="container padder">
      <div className="columns">
        <div className="column has-text-centered">
          <h2 className="title">Como Funciona</h2>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header-title">Lorem, ipsum dolor.</h3>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                ullam.
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header-title">Lorem, ipsum dolor.</h3>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                ullam.
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="card-header">
              <h3 className="card-header-title">Lorem, ipsum dolor.</h3>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                ullam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero is-medium slant-back">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Verificar el RE</h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form>
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      type="text"
                      className="input"
                      placeholder="N carnet"
                    />
                  </p>
                  <p className="control">
                    <a className="button is-info">Verificar</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container padder">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="has-text-centered">
            <h2 className="title">Alguna Duda?</h2>
            <p className="subtitle">Contactanos</p>
          </div>
          <form>
            <div className="field">
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  id="name"
                  name="name"
                  placeholder="Pedro Perez"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input"
                  placeholder="pperez@ejemplo.com"
                />
              </div>
            </div>
            <div className="field">
              <textarea className="textarea" placeholder="Probando Mensaje" />
            </div>
            <div className="field">
              <button type="button" className="button is-info">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Home;
