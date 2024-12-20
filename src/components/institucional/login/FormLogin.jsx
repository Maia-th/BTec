import React from "react";
import "./Form.css";

function FormLogin() {
  return (
        <form className="loginForm">
          <h1>Login</h1>
          <div className="formGroup">
            <label htmlFor="email">Entre com seu email</label>
            <input type="email" id="email" name="email" placeholder="Email" autoComplete="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Entre com sua senha</label>
            <input type="password" id="password" name="password" autoComplete="current-password" placeholder="Senha" required />
            <div className="formLinks">
              <a className="loginAdm" href="/">
                Login como administrador
              </a>
              <a className="esqueceuSenha" href="/">
                Esqueceu a sua senha? 
              </a>
            </div>
          </div>

          <button type="submit" className="loginButton">
            Acessar
          </button>
        </form>
  );
}

export default FormLogin;