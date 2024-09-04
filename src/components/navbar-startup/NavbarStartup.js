import React from "react";
import "../navbar-institucional/Navbar.css";
import logo from "../../assets/images/logoBranco.svg";

function NavBarInst() {
  return (
    <header>
      <div class="Menu-Desktop">
        <div class="logo">
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <nav class="Desktop-Nav">
          <ul>
            <li>
              <a href="#">BTec</a>
            </li>
            <li>
              <a href="#">Jornada do Empreendedor</a>
            </li>
            <li>
              <a href="#">Monitoramentos</a>
            </li>
            <li>
              <a href="#">Conteúdos e Evento</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <button
                class="SigBTec"
                onclick=""
                title="Sistema de gerenciamento"
              >
                PERFIL
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div id="Mobile" class="Menu-Mobile">
        <div class="menu-Icon">
          <div class="logo">
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button class="mIcon" onclick="" title="Icone do Menu Mobile">
            <span id="barraMenu"></span>
          </button>
        </div>
        <div class="area_menu">
          <nav id="Menu-Open">
            <ul>
              <li>
                <a href="#" onclick="">
                  BTec
                </a>
              </li>
              <li>
                <a href="#" onclick="">
                  Jornada do Empreendedor
                </a>
              </li>
              <li>
                <a href="#" onclick="">
                  Monitoramentos
                </a>
              </li>
              <li>
                <a href="#" onclick="">
                  Conteúdos e Eventos
                </a>
              </li>
              <li>
                <a href="#" onclick="">
                  Suporte
                </a>
              </li>
              <li>
                <button
                  class="SigBTec"
                  onclick=""
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

export default NavBarInst;
