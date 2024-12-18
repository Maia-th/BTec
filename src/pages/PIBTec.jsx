import React from "react";
import HeaderPIBTec from "../components/institucional/pibtec/header-pibtec/HeaderPIBTec";
import Jornada from "../components/institucional/pibtec/jornada/Jornada";
import FacaParte from "../components/institucional/pibtec/faca-parte/FacaParte";

export default function PIBTec() {
  return (
    <React.StrictMode>
      <HeaderPIBTec />
      <Jornada />
      <FacaParte />
    </React.StrictMode>
  );
}
