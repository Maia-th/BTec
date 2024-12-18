import React from "react";
import HeaderStartup from "../components/institucional/startup/header-startup/HeaderStartup";
import SectionStartup from "../components/institucional/startup/sectionStartup/SectionStartup";
import Galeria from "../components/institucional/startup/galeria/Galeria";

export default function Startup() {
  return (
    <React.StrictMode>
      <HeaderStartup />
      <SectionStartup />
      <Galeria />
    </React.StrictMode>
  );
}
