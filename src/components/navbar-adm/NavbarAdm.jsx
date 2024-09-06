import React from "react";
import "../navbar-institucional/Navbar.css";
import logo from "../../assets/images/logoBranco.svg";

function navbarAdm() {
  return (
    <header>
      <div className="Menu-Desktop">
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav className="Desktop-Nav">
          <ul>
            <li>
              <a href="#">BTec</a>
            </li>
            <li>
              <a href="#">Startups</a>
            </li>
            <li>
              <a href="#">Monitoramentos</a>
            </li>
            <li>
              <a href="#">Usuários</a>
            </li>
            <li>
              <a href="#">Relatórios</a>
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
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button className="mIcon" onClick="" title="Icone do Menu Mobile">
            <span id="barraMenu"></span>
          </button>
        </div>
        <div className="area_menu">
          <nav id="Menu-Open">
            <ul>
              <li>
                <a href="#" onClick="">
                  BTec
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Monitoramentos
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Usuários
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Relatórios
                </a>
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
    </header>
  );
}

export default navbarAdm;
