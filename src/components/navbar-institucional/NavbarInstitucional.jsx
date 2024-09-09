import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logoBranco.svg";

function navbarInst() {
  return (
    <section className="Navegacao">
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
              <a href="#">Processo de Seleção</a>
            </li>
            <li>
              <a href="#">PIBTec</a>
            </li>
            <li>
              <a href="#">PMBTec</a>
            </li>
            <li>
              <a href="#">Startups</a>
            </li>
            <li>
              <a href="#">Conteúdos e Eventos</a>
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
                  Processo de Seleção
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  PIBTec
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  PMBTec
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Startups
                </a>
              </li>
              <li>
                <a href="#" onClick="">
                  Conteúdos e Eventos
                </a>
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
