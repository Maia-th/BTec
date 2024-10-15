import React from "react";
import "./HeaderConteudos.css"
import logo from "../../../assets/images/logoBranco.svg";

function HeaderConteudos() {
    return (
        <header className="headerConteudos">
            <div className="titulo">
                <h1>Conteúdos e Eventos</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            </p>
            </div>
            
            <img src={logo} alt="Logo" />
        </header>
    );
}

export default HeaderConteudos;