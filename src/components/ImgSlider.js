import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const images = [
  "/images/slider-badag.jpg",
  "/images/slider-badging.jpg",
  "/images/slider-scale.jpg",
  "/images/slider-scales.jpg",
];

const ImgSlider = (props) => {
  return (
    <Carousel {...sliderSettings}>
      {images.map((image, i) => (
        <Wrap key={i}>
          <a>
            <img src={image} alt={image} />
          </a>
        </Wrap>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin: 20px 2rem;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 150);
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  /* box-sizing: border-box; */
  position: relative;
  padding: 0 1rem;
  a {
    border-radius: 4px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    display: block;
    position: relative;
    padding: 4px;
    transition: all 0.3s ease;

    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      transform: scale(1.03);
    }
  }
`;
export default ImgSlider;
