import React from "react";
import "./Artigos.css";
import capa from "../../../assets/images/capaArtigos.webp";

export default function Artigos() {
  return (
    <section className="sectionArtigos">
      <h2>Artigos da BTec </h2>
      <div className="artigos">
        <a
          className="artigoa"
          href="https://www.linkedin.com/pulse/apresenta%25C3%25A7%25C3%25A3o-da-btec-incubadora-de-neg%25C3%25B3cios-impacto/?trackingId=c4N9GKEzQgSx4hdKds5nQQ%3D%3D"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="artigoDiv">
            <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
            <div className="divTitulo">
              <p className="tituloArtigo">
                Apresentação da BTec - Incubadora de Negócios de Impacto e Base
                Tecnológica de Itabira
              </p>
            </div>
          </div>
        </a>
        <a
          className="artigoa"
          href="https://www.linkedin.com/pulse/empreendedorismo-btec-incubadora-de-neg%25C3%25B3cios-tecnol%25C3%25B3gicos-/?trackingId=c4N9GKEzQgSx4hdKds5nQQ%3D%3D"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="artigoDiv">
            <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
            <div className="divTitulo">
              <p className="tituloArtigo">Empreendedorismo</p>
            </div>
          </div>
        </a>
        <a
          className="artigoa"
          href="https://www.linkedin.com/pulse/desafios-enfrentados-pelas-startups-durante-o-per%25C3%25ADodo-btec/?trackingId=XoRyXdTKSPefg902WrGq1A%3D%3D"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="artigoDiv">
            <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
            <div className="divTitulo">
              <p className="tituloArtigo">
                Desafios enfrentados pelas startups durante o período de
                incubação e como superá-los
              </p>
            </div>
          </div>
        </a>
        <a
          className="artigoa"
          href="https://www.linkedin.com/pulse/inova%25C3%25A7%25C3%25A3o-btec-incubadora-de-neg%25C3%25B3cios-tecnol%25C3%25B3gicos-/?trackingId=c4N9GKEzQgSx4hdKds5nQQ%3D%3D"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="artigoDiv">
            <img className="ImagemArtigo" src={capa} alt="capa do Artigo" />
            <div className="divTitulo">
              <p className="tituloArtigo">Inovação</p>
            </div>
          </div>
        </a>
      </div>
      <a
        className="botaoVerArtigos"
        href="https://www.linkedin.com/in/btecunifeiitabira/recent-activity/articles/"
        target="_blank" rel="noopener noreferrer"
      >
        Acessar Mais Artigos
      </a>
    </section>
  );
}
