import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logoBranco.webp";
import menuShow from "../../utils/menuShow";

function navbarInst() {
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
              <Link className="navLink" to="/Selecao">
                Processo de Seleção
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/PIBTec">
                PIBTec
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/PMBTec">
                PMBTec
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/Startup">
                Startups
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/Conteudos">
                Conteúdos e Eventos
              </Link>
            </li>
            <li>
              <Link className="buttonLink" to="/">
                LOGIN
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
                <Link to="/Selecao" onClick={menuShow}>
                  Processo de Seleção
                </Link>
              </li>
              <li>
                <Link to="/PIBTec" onClick={menuShow}>
                  PIBTec
                </Link>
              </li>
              <li>
                <Link to="/PMBTec" onClick={menuShow}>
                  PMBTec
                </Link>
              </li>
              <li>
                <Link to="/Startup" onClick={menuShow}>
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/Conteudos" onClick={menuShow}>
                  Conteúdos e Eventos
                </Link>
              </li>
              <li>
                <Link className="buttonLink" to="/" onClick={menuShow}>
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default navbarInst;
