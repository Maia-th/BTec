import React from "react";
import "./Pibtec.css";
import EtapasPIBTec from "../etapasPIBTec/EtapasPIBTec";

function Pibtec() {
    return (
        <div className="pibtecDiv">
            <div className="div1">
                <h2>Programa de Incubação da BTec</h2>
                <p>O PIBTec (Programa de Incubação da BTec) é o coração da BTec, o programa tem o objetivo de auxiliar o desenvolvimento de novos negócios de base tecnológica (não escaláveis e escaláveis) por meio da jornada do empreendedor, com foco na geração de resultados inovadores e atendimento das demandas locais. A jornada que o empreendedor irá percorrer está dividida em três grandes etapas e tem duração entre um a três anos. O PIBTec é gratuito.</p>
                <EtapasPIBTec/>
            </div>
            <div className="div2">
                <p>Para participar do Processo de Seleção, é necessário atender aos requisitos do edital de seleção e fazer a inscrição de forma online.
                São condições básicas para participar do edital que o projeto proponha o desenvolvimento ou geração de produtos, processos ou serviços inovadores, de alto valor agregado e de base tecnológica. Também são analisadas a viabilidade técnica e a capacidade empreendedora. </p>
                <div className="botoesPib">
                    <a className="botaoEdital" href="https://docs.google.com/document/d/1K2BYQGHows723DOFcBcTE-M_WvsPps6f68NmUNHwl14/edit">
                    Confira o Edital
                    </a>
                    <a className="botaoInscricao" href="https://forms.gle/3GxNy5zZkuzD3Niv8">
                    Faça sua Inscrição
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pibtec;