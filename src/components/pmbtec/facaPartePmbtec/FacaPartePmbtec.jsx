import React from "react";
import "./FacaPartePmbtec.css";
import EtapasPMBTec from "../../selecao/etapasPMBTec/EtapasPMBTec";

function FacaPartePmbtec() {
  return (
    <div className="pmbtecDiv">
      <div className="div1">
        <h2>Faça parte do programa de mentoria</h2>
        <EtapasPMBTec />
      </div>
      <div className="div2">
        <p>
          Para participar do Processo de Seleção, é necessário atender aos
          requisitos do edital de seleção e fazer a inscrição de forma online.
          São condições básicas para participar do edital que os candidatos,
          sejam empreendedores e/ou empresários, possuam empresas ou negócios,
          cujos produtos, processos ou serviços sejam de base tecnológica. 
        </p>
        <div className="botoesPm">
          <a className="botaoEdital" href="#">
            Confira o Edital
          </a>
          <a
            className="botaoInscricao"
            href="https://forms.gle/nY6gxfj4E25oXxYt6"
          >
            Faça sua Inscrição
          </a>
        </div>
      </div>
    </div>
  );
}

export default FacaPartePmbtec;
