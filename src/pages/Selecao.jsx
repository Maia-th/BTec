import React from "react";
import LayoutInstitucional from "../layout/Default";
import HeaderSelecao from "../components/institucional/selecao/headerSelecao/HeaderSelecao";
import Pibtec from "../components/institucional/selecao/pibtec/Pibtec";
import Pmbtec from "../components/institucional/selecao/pmbtec/Pmbtec";

export default function Selecao() {
  return (
    <React.StrictMode>
      <LayoutInstitucional>
        <HeaderSelecao />
        <Pibtec />
        <Pmbtec />
      </LayoutInstitucional>
    </React.StrictMode>
  );
}
