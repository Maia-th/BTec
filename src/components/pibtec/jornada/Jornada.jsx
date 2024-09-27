import React from "react";
import "./Jornada.css";

export default function Jornada() {
  return (
    <section className="sectionJornada">
      <h2>Jornada Do Empreendedor</h2>
      <p>
        A Jornada do Empreendedor BTec é estruturada em cinco etapas
        fundamentais para transformar ideias inovadoras em negócios sustentáveis
        e de alto impacto. Cada etapa é projetada para oferecer suporte
        específico às necessidades dos empreendedores, proporcionando recursos e
        mentorias para impulsionar o desenvolvimento de suas startups.
      </p>
      <article className="cards">
        <div className="cardEtapa gray">
          <h3>Ideação e Validação</h3>
          <p>
            Desenvolvimento e refinamento de ideias inovadoras, com foco em
            oportunidades de mercado e testes de viabilidade.
          </p>
          <ul>
            <li>Workshops e brainstormings.</li>
            <li>Construção de protótipos.</li>
            <li>Realização de testes de mercado.</li>
            <li>Desenvolvimento de MVPs.</li>
          </ul>
        </div>
        <div className="cardEtapa blue">
          <h3>Operação</h3>
          <p>
          Estruturação do negócio e implementação de processos eficientes, com apoio em planos de negócios e estratégias de marketing.
          </p>
          <ul>
            <li>Desenvolvimento de planos de negócios.</li>
            <li>Definição de estratégias de marketing e vendas.</li>
            <li>Estabelecimento de parcerias estratégicas.</li>
            <li>Mentorias em gestão.</li>
          </ul>
        </div>
        <div className="cardEtapa gray">
          <h3>Tração</h3>
          <p>
          Foco no crescimento e expansão, aumentando a base de clientes e otimizando processos, com suporte para captação de investimentos.
          </p>
          <ul>
            <li>Aumento da base de clientes.</li>
            <li>Otimização de processos.</li>
            <li>Escala de operações.</li>
            <li>Captação de investimentos.</li>
          </ul>
        </div>
        <div className="cardEtapa blue">
          <h3>Escala</h3>
          <p>
          Consolidação e expansão sustentável do negócio, explorando novos mercados e implementando práticas de governança corporativa.
          </p>
          <ul>
            <li>Consolidação no mercado.</li>
            <li>Expansão sustentável.</li>
            <li>Exploração de novos mercados.</li>
            <li>Implementação de governança corporativa.</li>
          </ul>
        </div>
      </article>
      <p>
        O programa de incubação da BTec é um processo abrangente e estruturado,
        projetado para guiar empreendedores desde a concepção de suas ideias até
        a consolidação de negócios escaláveis e sustentáveis. Com suporte
        especializado em cada etapa, a BTec se posiciona como uma parceira
        essencial para o sucesso das startups.
      </p>
    </section>
  );
}
