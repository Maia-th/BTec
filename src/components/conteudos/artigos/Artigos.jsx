import React from "react";
import "./Artigos.css";
import capa from "./capaArtigos.png";

export default function Artigos() {
  return (
    <section className="sectionArtigos">
      <h2>Artigos da Btec </h2>
      <div className="artigos">
        <div className="artigoDiv">
          <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
          <div className="divTitulo">
            <p className="tituloArtigo">
              Apresentação da BTec - Incubadora de Negócios de Impacto e Base
              Tecnológica de Itabira
            </p>
          </div>
        </div>
        <div className="artigoDiv">
          <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
          <div className="divTitulo">
            <p className="tituloArtigo">Empreendedorismo</p>
          </div>
        </div>
        <div className="artigoDiv">
          <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
          <div className="divTitulo">
            <p className="tituloArtigo">
              Desafios enfrentados pelas startups durante o período de incubação
              e como superá-los
            </p>
          </div>
        </div>
        <div className="artigoDiv">
          <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
          <div className="divTitulo">
            <p className="tituloArtigo">Inovação</p>
          </div>
        </div>
      </div>
      <a className="botaoVerArtigos" href="">
                    Acessar mais artigos 
    </a>
    </section>
  );
}
