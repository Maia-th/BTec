import React from "react";
import NavBar from "../../components/navbar-institucional/NavbarInstitucional";
import Videos from "../../components/conteudos/videos/Videos";
import Podcast from "../../components/conteudos/podcast/Podcast";
import Agenda from "../../components/conteudos/agenda/Agenda";
import Footer from "../../components/footer/Footer";


export default function Conteudos() {
  return (
    <React.StrictMode>
      <NavBar />
      <Videos />
      <Podcast />
      <Agenda />
      <Footer />
    </React.StrictMode>
  );
}
