import React from "react";
import "./FacaParte.css";
import Pibtec from "../../selecao/pibtec/Pibtec";

export default function FacaParte() {
  return (
    <>
      <section className="sectionFacaParte">
        <h2>Faça Parte do Programa de Incubação</h2>
        <article className="etapas">
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>1</h3>
            </div>
            <div className="conteudoEtapa">
              <p>Inscrição <br/> Online</p>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>2</h3>
            </div>
            <div className="conteudoEtapa">
              <p>Análise do <br/> Projeto</p>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>3</h3>
            </div>
            <div className="conteudoEtapa">
              <p>Apresentação <br/> Oral do Projeto</p>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>4</h3>
            </div>
            <div className="conteudoEtapa">
              <p>Resultado <br/> Final</p>
            </div>
          </div>
        </article>
      </section>
      <div className="facaParteComponent">
        <Pibtec />
      </div>
    </>
  );
}
