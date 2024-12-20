import React from "react";
import "./HeaderPMBTec.css";
import etapas from "../../../../assets/images/logoPMBTec.webp";

export default function HeaderPMBTec() {
  return (
    <header className="headerPMBTec">
      <div className="textoPMBTec">
        <h1>Conheça o Programa de Mentoria da BTec</h1>
        <p>
        O PMBTec consiste no programa de mentoria para empreendores que necessitam de um acompanhamento em seu negócio. A mentoria tem duração de 4 a 8 sessões, a depender dos objetivos traçados entre mentor e mentorado.
        </p>
        <a className="botaoInscricaoPMBTec" href="https://forms.gle/nY6gxfj4E25oXxYt6" target="_blank" rel="noopener noreferrer">
          Edital de Seleção
        </a>
      </div>
      <img src={etapas} alt="Etapas de Incubacao" />
    </header>
  );
}
