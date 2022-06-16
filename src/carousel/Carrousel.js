import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./styleCarousel.scss"

const Carrousel = ({img}) => {

    return (
      <div className="carrousel">
        <img src="images/car1.webp" alt="carousel" className="carousel1" />
        <img src="images/car2.webp" alt="carousel" className="carousel2" />
        <img src="images/car3.webp" alt="carousel" className="carousel3" />
        </div>
    )
}

export default Carrousel