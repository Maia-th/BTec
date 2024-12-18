import React from "react";
import HeaderBtec from "../components/institucional/btec/header-btec/HeaderBtec";
import Parceiros from "../components/institucional/btec/parceiros/Parceiros";
import Numeros from "../components/institucional/btec/numeros/Numeros";
import Programas from "../components/institucional/btec/programas/Programas";
import Itabira from "../components/institucional/btec/itabira/Itabira";
import Missao from "../components/institucional/btec/missao/Missao";
import QuemSomos from "../components/institucional/btec/quemSomos/QuemSomos";

export default function Btec() {
  return (
    <React.StrictMode>
      <HeaderBtec />
      <Itabira />
      <Programas />
      <QuemSomos />
      <Numeros />
      <Missao />
      <Parceiros />
    </React.StrictMode>
  );
}
