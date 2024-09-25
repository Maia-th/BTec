import React from "react";
import "./Pmbtec.css";
import processos from "./processosPmbtec.png";

function Pmbtec() {
    return (
        <div className="pmbtecDiv">
            <div className="div1">
                <h1>Programa de mentoria da BTec (PMBTec)</h1>
                <p>O Programa de Mentoria da BTec, denominado PMBTec, corresponde a um processo de desenvolvimento profissional para empreendedores que necessitam de acompanhamento em seus negócios, com base em planejamentos pré-estabelecidos ou ações situacionais.  O Programa de Mentoria da BTec é oferecido por meio da realização de 4 (quatro) a 8 (oito) sessões com um mentor profissional. As sessões são baseadas em materiais elaborados pela BTec e SEBRAE e tratam de ações situacionais, mapas visuais e exercícios com foco na orientação profissional dos(as) mentorados(as). O PMBTec é gratuito.</p>
                <img className="imagemPmbtec" src={processos} alt="processos" />
            </div>
            <div className="div2">
                <p>Para participar do Processo de Seleção, é necessário atender aos requisitos do edital de seleção e fazer a inscrição de forma online.
                São condições básicas para participar do edital que os candidatos, sejam empreendedores e/ou empresários, possuam empresas ou negócios, cujos produtos, processos ou serviços sejam de base tecnológica. </p>
                <div className="botoesPm">
                    <a className="botaoEdital" href="#">
                    Confira o Edital
                    </a>
                    <a className="botaoInscricao" href="https://forms.gle/nY6gxfj4E25oXxYt6">
                    Faça sua Inscrição
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Pmbtec;