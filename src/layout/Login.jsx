import React from "react";
import SIGBTecLogo from "../assets/images/SIGBTec.png";
import "../styles/Login.css";

const Login = ({ form }) => {
    return (
      <div>
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
                  {form}  
              </div>
            </div>
      </div>
    );
  };
  
  export default Login;