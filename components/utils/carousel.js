import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Carousel = () => {
  const images = [
    {
      titulo:
        "O CV deve despertar o interesse do empregador a ponto de convencê-lo a investir tempo para conhecer o candidato",
      autor: "Andre Reis Pires Orozco",
      cargo: "Gerente de RH | Orozco",
    },
    {
      titulo:
        "Imagine que quem vai receber o CV tem menos de 1 minuto pra decidir se vai entrevistar esse candidato ou não.",
      autor: "Andre Reis Pires Orozco",
      cargo: "Gerente de RH | Orozco",
    },
    {
      titulo:
        "O cuidado dispensado ao layout traduz, de certa forma, o nível do profissional",
      autor: "Andre Reis Pires Orozco",
      cargo: "Gerente de RH | Orozco",
    },
    {
      titulo:
        "Às vezes o candidato é ótimo, mas transmite uma péssima imagem por apresentar um CV ruim",
      autor: "Andre Reis Pires Orozco",
      cargo: "Gerente de RH | Orozco",
    },
  ];

  const zoomInProperties = {
    indicators: false,
  };

  return (
    <div className="carrousel">
      <Zoom {...zoomInProperties} autoplay={true}>
        {images.map((each, index) => (
          <div
            key={index}
            className="carousel-slide flex">
            <div className="texto">
              <em>{each.titulo}</em>
              <div className="autor">
              <p>
                  <strong>
                  {each.autor}
                  </strong>
              </p>
              <p>{each.cargo}</p>
              </div>
            </div>
            <div className="shape" >
              <div className="mask" style={{backgroundImage: `url('./shape.png')`}}></div>
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQExmMBHXJs3lQ/profile-displayphoto-shrink_800_800/0/1611880216706?e=1626912000&v=beta&t=r0GB230o_02GMJdT9ELCBpjp4KhJ9eWGrlIMhEjvXJY" ></img>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Carousel;
