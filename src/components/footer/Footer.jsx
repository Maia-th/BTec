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
            <a
              href="https://www.youtube.com/@incubadorabtec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={28} />
            </a>
            <a
              href="https://www.instagram.com/btec_unifei_itabira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} />
            </a>
            <a
              href="https://t.me/btec_itabira_unifei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramLogo size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/btecunifeiitabira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={28} />
            </a>
            <a
              href="https://open.spotify.com/show/6Iho5tmsuRTSgtrsxklpWo?si=wVhaCHDJT6G71V492-2mJQ&nd=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SpotifyLogo size={28} />
            </a>
            <a
              href="mailto:btec@unifei.edu.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple size={28} />
            </a>
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
