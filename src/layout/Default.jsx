import React from "react";
import NavBar from "../components/navbar-institucional/NavbarInstitucional";
import Footer from "../components/footer/Footer";

const Default = ({ children }) => {
    return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export default Default;