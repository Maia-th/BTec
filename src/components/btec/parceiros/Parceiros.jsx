import React from "react";
import "./Parceiros.css"
import prefeitura from "../../assets/images/logoPrefeitura.svg";
import unifei from "../../assets/images/logoUnifei.svg";
import fupai from "../../assets/images/logoFupai.svg";

function parceiros() {
    return (
        <section className="sectionParceiros">
            <h2>Nossos Parceiros</h2>
            <div className="imagens">
                <img src={fupai} alt="Fupai" />
                <img src={unifei} alt="Unifei" />
                <img src={prefeitura} alt="Prefeitura de Itabira-MG" />
            </div>
        </section>
    );
}
export default parceiros;