import React from "react";
import HeaderPMBTec from "../components/institucional/pmbtec/header-pmbtec/HeaderPMBTec";
import SobreMentoria from "../components/institucional/pmbtec/sobreMentoria/SobreMentoria";
import FacaPartePmbtec from "../components/institucional/pmbtec/facaPartePmbtec/FacaPartePmbtec";

export default function PIBTec() {
  return (
    <React.StrictMode>
      <HeaderPMBTec />
      <SobreMentoria/>
      <FacaPartePmbtec/>
    </React.StrictMode>
  );
}


