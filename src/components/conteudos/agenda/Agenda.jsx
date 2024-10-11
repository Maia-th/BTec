import React from "react";
import "./Agenda.css";

export default function Agenda() {
  return (
    <section className="sectionAgenda">
      <h2>Agenda de Eventos</h2>
      <article className="agenda">
      <iframe title="agendaBTec" src="https://calendar.google.com/calendar/embed?src=btec%40unifei.edu.br&ctz=America%2FSao_Paulo" frameborder="0" scrolling="no"></iframe>
      </article>
    </section>
  );
}