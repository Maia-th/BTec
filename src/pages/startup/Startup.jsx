import React from "react";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import HeaderStartup from "../../components/startup/header-startup/HeaderStartup";
import SectionStartup from "../../components/startup/sectionStartup/SectionStartup";
import Footer from "../../components/footer/Footer";

export default function Startup() {
  return (
    <React.StrictMode>
      <NavBar />
      <HeaderStartup />
      <SectionStartup />
      <Footer />
    </React.StrictMode>
  );
}
