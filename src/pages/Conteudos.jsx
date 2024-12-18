import React from "react";
import LayoutInstitucional from "../layout/Default";
import Videos from "../components/institucional/conteudos/videos/Videos";
import Podcast from "../components/institucional/conteudos/podcast/Podcast";
import Agenda from "../components/institucional/conteudos/agenda/Agenda";
import HeaderConteudos from "../components/institucional/conteudos/headerConteudos/HeaderConteudos";
import Artigos from "../components/institucional/conteudos/artigos/Artigos";

export default function Conteudos() {
  return (
    <React.StrictMode>
      <LayoutInstitucional>
        <HeaderConteudos />
        <Artigos />
        <Podcast />
        <Videos />
        <Agenda />
      </LayoutInstitucional>
    </React.StrictMode>
  );
}
