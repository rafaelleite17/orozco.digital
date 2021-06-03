import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const Slideshow = () => {
  const images = [
    {
      titulo: "What is Lorem Ipsum?            ",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        item: "Where does it come from?",
        image: './sliders/um.jpeg'
    },
    {
      titulo: "Why do we use it?",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        item: "Where does it come from?",
        image: './sliders/dois.jpg'

    },
    {
      titulo: "Where can I get some?",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        item: "Where does it come from?",
        image: './sliders/dois.jpg'
    },
  ];
  
  const zoomInProperties = {
    indicators: true,
    scale: 1.9,
  };
  return (
    <div>
      <Zoom {...zoomInProperties} autoplay={true}>
        {images.map((each, index) => (
          <div key={index} className="slide" style={{backgroundImage: `url(${each.image})`}}>
            <div className="texto">
              <h2>{each.titulo}</h2>
              <p>{each.descricao}</p>
              <div className="item">{each.descricao}</div>
            </div>

          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
