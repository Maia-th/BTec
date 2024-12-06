import React from "react";
import NavBar from "../components/navbar-institucional/NavbarInstitucional";
import HeaderPMBTec from "../components/institucional/pmbtec/header-pmbtec/HeaderPMBTec";
import SobreMentoria from "../components/institucional/pmbtec/sobreMentoria/SobreMentoria";
import FacaPartePmbtec from "../components/institucional/pmbtec/facaPartePmbtec/FacaPartePmbtec";
import Footer from "../components/footer/Footer";

export default function PIBTec() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderPMBTec />
      <SobreMentoria/>
      <FacaPartePmbtec/>
      <Footer />
    </React.StrictMode>
  );
}


