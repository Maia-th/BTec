import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from "../../assets/images/logoBranco.svg";
import menuShow from "../../utils/menu-show/menuShow";

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
              <Link to="/">BTec</Link>
            </li>
            <li>
              <Link to="../../pages/selecao/Selecao.jsx">Processo de Seleção</Link>
            </li>
            <li>
              <Link to="/">PIBTec</Link>
            </li>
            <li>
              <Link to="/">PMBTec</Link>
            </li>
            <li>
              <Link to="/">Startups</Link>
            </li>
            <li>
              <Link to="/">Conteúdos e Eventos</Link>
            </li>
            <li>
              <Link className="buttonLink" to="/">LOGIN</Link>
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
                  Processo de Seleção
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  PIBTec
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  PMBTec
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Startups
                </Link>
              </li>
              <li>
                <Link to="/" onClick={menuShow}>
                  Conteúdos e Eventos
                </Link>
              </li>
              <li>
                <button
                  className="SigBTec"
                  onClick=""
                  title="Sistema de gerenciamento"
                >
                  LOGIN
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default navbarInst;
