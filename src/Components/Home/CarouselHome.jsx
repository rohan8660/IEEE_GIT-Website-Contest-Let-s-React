import React, { Fragment } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselHome({imgStyle,imgDivStyle}) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
    >
      <div className={imgDivStyle}>
        <img
        alt="pic1"
          src={require(`../../Assets/Home1.jpg`)}
          className={imgStyle}
        />
      </div>
      <div className={imgDivStyle}>
        <img
        alt="pic2"
          src={require(`../../Assets/Home2.jpg`)}
          className={imgStyle}
        />
      </div>
      <div className={imgDivStyle}>
        <img
        alt="pic3"
          src={require(`../../Assets/Home3.jpg`)}
          className={imgStyle}
        />
      </div>
      <div className={imgDivStyle}>
        <img
        alt="pic3"
          src={require(`../../Assets/Home4.jpg`)}
          className={imgStyle}
        />
      </div>
    </Carousel>
  );
}

export default CarouselHome;
