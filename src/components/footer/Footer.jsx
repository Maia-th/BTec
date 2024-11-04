import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logoBranca.webp";
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
            <a href="https://www.youtube.com/@incubadorabtec"><YoutubeLogo size={28} /></a>
            <a href="https://www.instagram.com/btec_unifei_itabira/"><InstagramLogo size={28} /></a>
            <a href="https://t.me/btec_itabira_unifei"><TelegramLogo size={28} /></a>
            <a href="https://www.linkedin.com/in/btecunifeiitabira/"><LinkedinLogo size={28} /></a>
            <a href="https://open.spotify.com/show/6Iho5tmsuRTSgtrsxklpWo?si=wVhaCHDJT6G71V492-2mJQ&nd=1"><SpotifyLogo size={28} /></a>
            <a href=""><EnvelopeSimple size={28} /></a>
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
