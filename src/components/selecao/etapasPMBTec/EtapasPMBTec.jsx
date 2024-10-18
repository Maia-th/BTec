import React from "react";
import "./EtapasPMBTec.css";

function EtapasPMBTec() {
  return (
    <section>
        <article className="etapas PMBTec">
          <div className="etapaCard">
            <div className="numeroEtapa">
              <h3>1</h3>
            </div>
            <div className="setaEtapa">
              <div className="conteudoEtapa">
                <p>Inscrição Online</p>
              </div>
            </div>
          </div>
          <div className="etapaCard">
            <div className="numeroEtapa setaOn">
              <h3>2</h3>
            </div>
            <div className="setaEtapa">
              <span>▶</span>
              <div className="conteudoEtapa">
                <p>
                  Avaliação da <br /> Documentação
                </p>
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
                <p>Resultado Final</p>
              </div>
            </div>
          </div>
        </article>
    </section>
  );
}

export default EtapasPMBTec;
