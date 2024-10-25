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
        <button>Edital De Seleção</button>
      </div>
      <img src={etapas} alt="Etapas de Incubacao" />
    </header>
  );
}
