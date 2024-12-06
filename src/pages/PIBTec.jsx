import React from "react";
import NavBar from "../components/navbar-institucional/NavbarInstitucional";
import HeaderPIBTec from "../components/institucional/pibtec/header-pibtec/HeaderPIBTec";
import Jornada from "../components/institucional/pibtec/jornada/Jornada";
import FacaParte from "../components/institucional/pibtec/faca-parte/FacaParte";
import Footer from "../components/footer/Footer";

export default function PIBTec() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderPIBTec />
      <Jornada />
      <FacaParte />
      <Footer />
    </React.StrictMode>
  );
}
