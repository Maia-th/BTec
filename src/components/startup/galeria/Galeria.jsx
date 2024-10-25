import React from "react";
import "./Galeria.css";
import Foto01 from "../../../assets/images/Fotos/foto01.webp";
import Foto02 from "../../../assets/images/Fotos/foto02.webp";
import Foto03 from "../../../assets/images/Fotos/foto03.webp";
import Foto04 from "../../../assets/images/Fotos/foto04.webp";
import Foto05 from "../../../assets/images/Fotos/foto05.webp";
import Foto06 from "../../../assets/images/Fotos/foto06.webp";
import Foto07 from "../../../assets/images/Fotos/foto07.webp";
import Foto08 from "../../../assets/images/Fotos/foto08.webp";
import Foto09 from "../../../assets/images/Fotos/foto09.webp";
import Foto10 from "../../../assets/images/Fotos/foto10.webp";
import Foto11 from "../../../assets/images/Fotos/foto11.webp";
import Foto12 from "../../../assets/images/Fotos/foto12.webp";
import Foto13 from "../../../assets/images/Fotos/foto13.webp";
import Foto14 from "../../../assets/images/Fotos/foto14.webp";

export default function Galeria() {
    return(
        <section className="sectionGaleria">
            <h2>Galeria de Fotos</h2>
            <article className="fotos">
                <img src={Foto12} alt="Foto 12" />
                <img src={Foto13} alt="Foto 13" />
                <img src={Foto14} alt="Foto 14" />
                <img src={Foto01} alt="Foto 01" />
                <img src={Foto02} alt="Foto 02" />
                <img src={Foto03} alt="Foto 03" />
                <img src={Foto04} alt="Foto 04" />
                <img src={Foto05} alt="Foto 05" />
                <img src={Foto06} alt="Foto 06" />
                <img src={Foto07} alt="Foto 07" />
                <img src={Foto08} alt="Foto 08" />
                <img src={Foto09} alt="Foto 09" />
                <img src={Foto10} alt="Foto 10" />
                <img src={Foto11} alt="Foto 11" />
            </article>
        </section>
    );
}