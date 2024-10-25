import React from "react";
import "./SectionStartup.css";
import LogoTangram from "../../../assets/images/TangramMove.webp";
import JESTTOR from "../../../assets/images/JESTTOR.webp";
import Convici from "../../../assets/images/Convici.webp";
import HHO from "../../../assets/images/HHO.webp";

export default function SectionStartup() {
  return (
    <section className="sectionStartup">
      <h2>Startups</h2>
      <article className="cardsStartups">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img src={LogoTangram} alt="Logo Startup" />
            <h3>Tangram Move</h3>
            <p>Graduada</p>
          </div>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img src={JESTTOR} alt="Logo Startup" />
            <h3>JESTTOR</h3>
            <p>Graduada</p>
          </div>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img src={Convici} alt="Logo Startup" />
            <h3>Convici</h3>
            <p>Incubada</p>
          </div>
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <div className="card">
            <img src={HHO} alt="Logo Startup" />
            <h3>HHO</h3>
            <p>Incubada</p>
          </div>
        </a>
      </article>
    </section>
  );
}
