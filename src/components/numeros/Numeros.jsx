import React from "react";
import "./Numeros.css"

function numeros() {
    return (
        <section className="numerosSection">
            <h2>Números</h2>
            <div className="metricas">
                <div className="metricaCard">
                    <p><span>2</span>Startups Incubadas</p>
                </div>
                <div className="metricaCard">
                    <p><span>2</span>Startups Graduadas</p>
                </div>
                <div className="metricaCard">
                    <p><span>1</span>Mentoria de Negócios</p>
                </div>
                <div className="metricaCard">
                    <p><span>4</span>Soluções Desenvolvidas</p>
                </div>
                <div className="metricaCard">
                    <p><span>+15</span>Talk BTec</p>
                </div>
                <div className="metricaCard">
                    <p><span>+10</span>Artigos</p>
                </div>
            </div>
        </section>
    );
}

export default numeros;