import React from "react";
import './Programas.css'
import incubacao from "../../assets/images/btecIncubacao.svg";
import mentoria from "../../assets/images/btecMentoria.svg";

function programas (){
    return(
        <section className="programasSection">
            <h2>Conheça Nossos Programas</h2>
            <article className="PIBTec">
                <img src={incubacao} alt="Caderno e Caneta" />
                <div className="info">
                    <h3>Programa de Incubação</h3>
                    <p>O PIBTec (Programa de Incubação da BTec) é o coração da BTec, o programa tem o objetivo de auxiliar o desenvolvimento de novos negócios de base tecnológica (não escaláveis e escaláveis) por meio da jornada do empreendedor, com foco na geração de resultados inovadores e atendimento das demandas locais. A jornada que o empreendedor irá percorrer está dividida em três grandes etapas e tem duração entre um a três anos.</p>
                    <button>Inscreva-se no PIBTec</button>
                </div>
            </article>

            <article className="PMBTec">
                <div className="info">
                    <h3>Programa de Mentoria</h3>
                    <p>O PMBTec (Programa de Mentoria da BTec) consiste no programa de mentoria para empreendores que necessitam de um acompanhamento em seu negócio. A mentoria tem duração de 6 a 8 sessões, a depender dos objetivos traçados entre mentor e mentorado.</p>
                    <button>Conteúdos e eventos</button>
                </div>
                <img src={mentoria} alt="Livros" />
            </article>
        </section>
    );
}

export default programas;