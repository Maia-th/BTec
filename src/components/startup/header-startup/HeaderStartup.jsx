import React from "react";
import "./HeaderStartup.css";
import PIBTecLogo from "../../../assets/images/logoPIBTec.png";

export default function HeaderStartup() {
  return (
    <header className="HeaderStartup">
      <div className="TextoStartup">
        <h1>Startups Graduadas e Incubadas Pelo PIBTEC</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque quidem natus culpa consectetur, perferendis suscipit soluta maiores odio impedit? Aperiam deleniti placeat repellat molestias blanditiis laudantium obcaecati aliquid laborum.
        </p>
        <button>Participe do PIBTec</button>
      </div>
      <img src={PIBTecLogo} alt="Logo PIBTec" />
    </header>
  );
}
