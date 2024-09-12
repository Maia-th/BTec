import React from "react";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import HeaderBtec from "../../components/header-btec/HeaderBtec";
import Parceiros from "../../components/parceiros/Parceiros";
import Numeros from "../../components/numeros/Numeros";
import Programas from "../../components/programas/Programas";
import Footer from "../../components/footer/Footer";
import Itabira from "../../components/itabira/Itabira";
import Missao from "../../components/missao/Missao";
import QuemSomos from "../../components/quemSomos/QuemSomos";

export default function Btec() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderBtec />
      <Itabira />
      <Programas />
      <QuemSomos />
      <Numeros />
      <Missao />
      <Parceiros />
      <Footer />
    </React.StrictMode>
  );
}
