import React from "react";
import "./HeaderStartup.css";
import PIBTecLogo from "../../../../assets/images/logoPIBTec.webp";

export default function HeaderStartup() {
  return (
    <header className="HeaderStartup">
      <div className="TextoStartup">
        <h1>Startups Graduadas e Incubadas Pelo PIBTEC</h1>
        <p>
        A BTec possui empresas graduadas e empresas incubadas. Venha conhecer essas empresas, bem como suas histórias de sucesso e crescimento. Aumente sua rede de contatos!
        </p>
        <button onClick={() => window.location.href = '/PIBTec'}>Participe do PIBTec</button>
      </div>
      <img src={PIBTecLogo} alt="Logo PIBTec" />
    </header>
  );
}
