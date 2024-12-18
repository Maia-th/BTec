import React from "react";
import "./EtapasPIBTec.css";

function EtapasPIBTec() {
  return (
    <section>
        <article className="etapas PIBTec">
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>1</h3>
            </div>
            <div className="setaEtapa">
            <div className="conteudoEtapa">
              <p>Inscrição <br/> Online</p>
            </div></div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa setaOn">
              <h3>2</h3>
            </div>
            <div className="setaEtapa">
              <span>▶</span>
            <div className="conteudoEtapa">
              <p>Análise do <br/> Projeto</p>
            </div>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa setaOn">
              <h3>3</h3>
            </div>
            <div className="setaEtapa">
              <span>▶</span>
            <div className="conteudoEtapa">
              <p>Apresentação <br/> Oral do Projeto</p>
            </div>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa setaOn">
              <h3>4</h3>
            </div>
            <div className="setaEtapa">
              <span>▶</span>
            <div className="conteudoEtapa">
              <p>Resultado <br/> Final</p>
            </div>
            </div>
          </div>
        </article>
    </section>
  );
}

export default EtapasPIBTec;
