import React from "react";
import "./FacaParte.css";
import Pibtec from "../../selecao/pibtec/Pibtec";
import EtapasPIBTec from "../../selecao/etapasPIBTec/EtapasPIBTec";

export default function FacaParte() {
  return (
    <>
      <section className="sectionFacaParte">
        <h2>Faça Parte do Programa de Incubação</h2>
        <EtapasPIBTec />
      </section>
      <div className="facaParteComponent">
        <Pibtec />
      </div>
    </>
  );
}
