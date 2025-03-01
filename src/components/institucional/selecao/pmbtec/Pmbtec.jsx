import React from "react";
import "./Pmbtec.css";
import EtapasPMBTec from "../etapasPMBTec/EtapasPMBTec";

function Pmbtec() {
    return (
        <div className="pmbtecDiv">
            <div className="div1">
                <h2>Programa de Mentoria da BTec</h2>
                <p>O Programa de Mentoria da BTec, denominado PMBTec, corresponde a um processo de desenvolvimento profissional para empreendedores que necessitam de acompanhamento em seus negócios, com base em planejamentos pré-estabelecidos ou ações situacionais.  O Programa de Mentoria da BTec é oferecido por meio da realização de 4 (quatro) a 8 (oito) sessões com um mentor profissional. As sessões são baseadas em materiais elaborados pela BTec e SEBRAE e tratam de ações situacionais, mapas visuais e exercícios com foco na orientação profissional dos(as) mentorados(as). O PMBTec é gratuito.</p>
                <EtapasPMBTec/>
            </div>
            <div className="div2">
                <p>Para participar do Processo de Seleção, é necessário atender aos requisitos do edital de seleção e fazer a inscrição de forma online.
                São condições básicas para participar do edital que os candidatos, sejam empreendedores e/ou empresários, possuam empresas ou negócios, cujos produtos, processos ou serviços sejam de base tecnológica. </p>
                <div className="botoesPm">
                    <a className="botaoEdital" href="https://docs.google.com/document/d/1zHkqHwNMLbpvq9VJ7ahKQQsRLtsla_gTWV3wKd8WRxE/edit" target="_blank" rel="noopener noreferrer">
                    Confira o Edital
                    </a>
                    <a className="botaoInscricao" href="https://forms.gle/nY6gxfj4E25oXxYt6" target="_blank" rel="noopener noreferrer">
                    Faça sua Inscrição
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Pmbtec;