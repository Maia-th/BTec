import React from "react";
import NavBar from "../components/navbar-institucional/NavbarInstitucional";
import LoginPage from "../components/institucional/login/LoginPage";
import Footer from "../components/footer/Footer";

export default function Login() {
  return (
    <React.StrictMode>
      <NavBar />
      <LoginPage />
      <Footer />
    </React.StrictMode>
  );
}
