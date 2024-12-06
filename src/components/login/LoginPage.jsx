import React from "react";
import "./LoginPage.css";
import SIGBTecLogo from "../../assets/images/SIGBTec.png";

function LoginPage() {
  return (
    <div className="containerLogin">
      <div className="divAzul">
        <img className="logoSIGBtec" src={SIGBTecLogo} alt="Logo SIGBTec" />
      </div>
      <div className="divBranca">
        <div className="textosLaterais">
          <h3>Sistema de Gerenciamento de Startups</h3>
          <p>
            O SIGBTec é um sistema desenvolvido pelo time BTec para
            acompanhamento e monitoramento das empresas incubadas.
          </p>
        </div>
      </div>
      <div className="cardLogin">
        <form className="loginForm">
          <h1>Login</h1>
          <div className="formGroup">
            <label htmlFor="email">Entre com seu email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Entre com sua senha</label>
            <input type="password" id="password" name="password" required />
            <div className="formLinks">
              <a className="loginAdm" href="">
                login como administrador
              </a>
              <a className="esqueceuSenha" href="">
                esqueceu sua senha? 
              </a>
            </div>
          </div>

          <button type="submit" className="loginButton">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
