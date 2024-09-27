import React from "react";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import HeaderPIBTec from "../../components/pibtec/header-pibtec/HeaderPIBTec";
import Jornada from "../../components/pibtec/jornada/Jornada";
import FacaParte from "../../components/pibtec/faca-parte/FacaParte";
import Footer from "../../components/footer/Footer";

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
