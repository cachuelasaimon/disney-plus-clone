import React from "react";
import styled from "styled-components";

const viewerResources = [
  {
    image: "/images/viewers-disney.png",
    video: "/videos/1564674844-disney.mp4",
  },
  { image: "/images/viewers-pixar.png", video: "/videos/1564676714-pixar.mp4" },
  {
    image: "/images/viewers-marvel.png",
    video: "/videos/1564676115-marvel.mp4",
  },
  {
    image: "/images/viewers-starwars.png",
    video: "/videos/1608229455-star-wars.mp4",
  },
  {
    image: "/images/viewers-national.png",
    video: "/videos/1564676296-national-geographic.mp4",
  },
];

const Viewers = (props) => {
  return (
    <Container>
      {viewerResources.map((content, i) => (
        <Wrap key={i}>
          <img src={content.image} alt={content.image} />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={content.video} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 92%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  /* padding: 1rem; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
  border-radius: 10px;
  border: 2px solid rgba(150, 150, 150, 0.7);
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transform: scale(1);

  img {
    width: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out 0s;
  }

  video {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0s;
    z-index: -1;
  }

  &:hover {
    transform: scale(1.05);
    border: 2px solid white;
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
