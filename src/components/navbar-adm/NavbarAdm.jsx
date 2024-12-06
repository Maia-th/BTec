import React from "react";
import { Link } from "react-router-dom";
import "../navbar-institucional/Navbar.css";
import logo from "../../assets/images/logoBranco.webp";
import menuShow from "../../utils/menuShow";

function navbarAdm() {
  return (
    <section className="Navegacao">
      <div className="Menu-Desktop">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className="Desktop-Nav">
          <ul>
            <li>
              <Link className="navLink" to="/">
                BTec
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                Startups
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                Monitoramentos
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                Usuários
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/">
                Relatórios
              </Link>
            </li>
            <li>
              <Link className="buttonLink" to="/">
                PERFIL
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="Mobile" className="Menu-Mobile">
        <div className="menu-Icon">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
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
                <Link to="/" onClick={menuShow}>
                  BTec
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Monitoramentos
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Usuários
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Relatórios
                </Link>
              </li>
              <li>
                <Link className="buttonLink" to="/" onClick={menuShow}>
                  PERFIL
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default navbarAdm;
