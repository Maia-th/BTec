import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar-institucional/Navbar.css";
import logo from "../../assets/images/logoBranco.webp";
import menuShow from "../../utils/menuShow";

function navbarAdm() {
  return (
    <section className="Navegacao">
      <div className="Menu-Desktop">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <nav className="Desktop-Nav">
          <ul>
            <li>
              <a className="navLink" href="https://btec-itabira.vercel.app/" target="_blank" rel="noopener noreferrer">BTec</a>
            </li>
            <li>
              <NavLink className="navLink" to="/" activeClassName="active">
                Startups
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/" activeClassName="active">
                Monitoramentos
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/" activeClassName="active">
                Usuários
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/" activeClassName="active">
                Relatórios
              </NavLink>
            </li>
            <li>
              {/* Alterar */}
              <NavLink className="buttonLink" to="/">
                PERFIL
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="Mobile" className="Menu-Mobile">
        <div className="menu-Icon">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <button
            className="mIcon"
            onClick={menuShow}
            title="Icone do Menu Mobile"
          >
            <span id="barraMenu"></span>
          </button>
        </div>
        <div className="area_menu">
          <nav id="Menu-Open">
            <ul>
              <li>
                <NavLink to="/" onClick={menuShow}>
                  BTec
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={menuShow}>
                  Startups
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={menuShow}>
                  Monitoramentos
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={menuShow}>
                  Usuários
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={menuShow}>
                  Relatórios
                </NavLink>
              </li>
              <li>
                {/* Alterar */}
                <NavLink className="buttonLink" to="/" onClick={menuShow}>
                  PERFIL
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default navbarAdm;
