import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const Carrossel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={Foto05} alt="Foto 05" />
        </div>
        <div>
          <img src={Foto12} alt="Foto 12" />
        </div>
        <div>
          <img src={Foto13} alt="Foto 13" />
        </div>
        <div>
          <img src={Foto14} alt="Foto 14" />
        </div>
        <div>
          <img src={Foto01} alt="Foto 01" />
        </div>
        <div>
          <img src={Foto02} alt="Foto 02" />
        </div>
        <div>
          <img src={Foto03} alt="Foto 03" />
        </div>
        <div>
          <img src={Foto04} alt="Foto 04" />
        </div>
        <div>
          <img src={Foto06} alt="Foto 06" />
        </div>
        <div>
          <img src={Foto07} alt="Foto 07" />
        </div>
        <div>
          <img src={Foto08} alt="Foto 08" />
        </div>
        <div>
          <img src={Foto09} alt="Foto 09" />
        </div>
        <div>
          <img src={Foto10} alt="Foto 10" />
        </div>
        <div>
          <img src={Foto11} alt="Foto 11" />
        </div>
      </Slider>
    );
  };
  
  export default Carrossel;