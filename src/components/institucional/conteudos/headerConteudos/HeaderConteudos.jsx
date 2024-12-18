import React from "react";
import "./HeaderConteudos.css";
import logo from "../../../../assets/images/logoBranco.webp";

function HeaderConteudos() {
  return (
    <header className="headerConteudos">
      <div className="titulo">
        <h1>Conteúdos e Eventos</h1>
        <p>
          A BTec produz de forma constante conteúdos gratuitos e disponíveis a
          todos. Além disso, a BTec possui uma agenda de eventos que você também
          pode aproveitar. Acesse e fique por dentro dos assuntos e novidades.
        </p>
      </div>

      <img src={logo} alt="Logo" />
    </header>
  );
}

export default HeaderConteudos;
