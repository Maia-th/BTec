import React from "react";
import { Link } from 'react-router-dom'
import "../navbar-institucional/Navbar.css";
import logo from "../../assets/images/logoBranco.webp";
import menuShow from "../../utils/menu-show/menuShow"

function navbarStartup() {
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
              <Link className="navLink" to="/">BTec</Link>
            </li>
            <li>
              <Link className="navLink" to="/">Jornada do Empreendedor</Link>
            </li>
            <li>
              <Link className="navLink" to="/">Monitoramentos</Link>
            </li>
            <li>
              <Link className="navLink" to="/">Conteúdos e Evento</Link>
            </li>
            <li>
              <Link className="navLink" to="/">Suporte</Link>
            </li>
            <li>
              <button
                className="SigBTec"
                onClick=""
                title="Sistema de gerenciamento"
              >
                PERFIL
              </button>
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
          <button className="mIcon" onClick={menuShow} title="Icone do Menu Mobile">
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
                  Jornada do Empreendedor
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Monitoramentos
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Conteúdos e Eventos
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Suporte
                </Link>
              </li>
              <li>
                <button
                  className="SigBTec"
                  onClick=""
                  title="Sistema de gerenciamento"
                >
                  PERFIL
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default  navbarStartup;
