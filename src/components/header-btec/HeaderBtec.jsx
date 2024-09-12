import React from "react";
import "./HeaderBtec.css"
import logo from "../../assets/images/logoBranco.svg";

function headerBtec() {
    return (
        <header className="headerBtec">
            <div className="titulo">
                <h1>Incubadora de Negócios de Impacto e Base Tecnológica de Itabira</h1>
            </div>
            <img src={logo} alt="Logo" />
        </header>
    );
}

export default headerBtec;