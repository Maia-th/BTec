import React from "react";
import LayoutInstitucional from "../layout/Default";
import HeaderStartup from "../components/institucional/startup/header-startup/HeaderStartup";
import SectionStartup from "../components/institucional/startup/sectionStartup/SectionStartup";
import Galeria from "../components/institucional/startup/galeria/Galeria";

export default function Startup() {
  return (
    <React.StrictMode>
      <LayoutInstitucional>
        <HeaderStartup />
        <SectionStartup />
        <Galeria />
      </LayoutInstitucional>
    </React.StrictMode>
  );
}
