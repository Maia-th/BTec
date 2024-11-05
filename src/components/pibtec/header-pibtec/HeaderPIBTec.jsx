import React from "react";
import "./HeaderPIBTec.css";
import etapas from "../../../assets/images/etapas.webp";

export default function HeaderPIBTec() {
  return (
    <header className="HeaderPIBTec">
      <div className="TextoPIBTec">
        <h1>Conheça o Programa de Incubação da BTec</h1>
        <p>
          O PIBTec é um programa criado pela BTec, que tem o intuito de suportar
          o desenvolvimento de novos negócios de base tecnológica (não
          escaláveis e escaláveis) por meio da jornada do empreendedor com foco
          na geração de resultados inovadores e atendimento das demandas locais.
        </p>
        <button onClick={() => window.open("https://docs.google.com/document/d/1K2BYQGHows723DOFcBcTE-M_WvsPps6f68NmUNHwl14", "_blank")}>Edital De Seleção</button>
      </div>
      <img src={etapas} alt="Etapas de Incubacao" />
    </header>
  );
}
