import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logoBranco.webp";
import menuShow from "../../utils/menuShow";

function navbarInst() {
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
              <NavLink className="navLink" to="/" activeClassName="active">
                BTec
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/Selecao" activeClassName="active">
                Processo de Seleção
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/PIBTec" activeClassName="active">
                PIBTec
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/PMBTec" activeClassName="active">
                PMBTec
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/Startup" activeClassName="active">
                Startups
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/Conteudos" activeClassName="active">
                Conteúdos e Eventos
              </NavLink>
            </li>
            <li>
              <NavLink className="buttonLink" to="/Login" activeClassName="active">
                LOGIN
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
                <NavLink to="/Selecao" onClick={menuShow}>
                  Processo de Seleção
                </NavLink>
              </li>
              <li>
                <NavLink to="/PIBTec" onClick={menuShow}>
                  PIBTec
                </NavLink>
              </li>
              <li>
                <NavLink to="/PMBTec" onClick={menuShow}>
                  PMBTec
                </NavLink>
              </li>
              <li>
                <NavLink to="/Startup" onClick={menuShow}>
                  Startups
                </NavLink>
              </li>
              <li>
                <NavLink to="/Conteudos" onClick={menuShow}>
                  Conteúdos e Eventos
                </NavLink>
              </li>
              <li>
                <NavLink className="buttonLink" to="/Login" onClick={menuShow}>
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default navbarInst;
