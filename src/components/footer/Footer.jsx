import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logoBranca.png";
import {
  YoutubeLogo,
  InstagramLogo,
  TelegramLogo,
  LinkedinLogo,
  SpotifyLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="logoContato">
        <img className="logo" src={logo} alt="logo" />
        <div className="divContatos">
          <h1 className="contatos">Contatos</h1>
          <div className="icons">
            <YoutubeLogo size={28} />
            <InstagramLogo size={28} />
            <TelegramLogo size={28} />
            <LinkedinLogo size={28} />
            <SpotifyLogo size={28} />
            <EnvelopeSimple size={28} />
          </div>
        </div>
      </div>
      <div className="divEndereco">
        <div>
          <p className="titulo">Espaço Físico</p>
          <p className="endereco">
            Campus Theodomiro Carneiro Santiago - Itabira Sala BTec localizada
            dentro do Coworking Rua Irmã Ivone Drumond, 200 – Distrito
            Industrial II, Itabira, MG - CEP 35903-087 - Telefone (31) 3839-0800
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
