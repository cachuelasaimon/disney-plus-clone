import React from "react";
import styled from "styled-components";

const viewers = [
  {
    logo: "/images/viewers-disney.png",
    video: "/videos/1564674844-disney.mp4",
  },
  {
    logo: "/images/viewers-marvel.png",
    video: "/videos/1564676115-marvel.mp4",
  },
  {
    logo: "/images/viewers-national.png",
    video: "/videos/1564676296-national-geographic.mp4",
  },
  {
    logo: "/images/viewers-pixar.png",
    video: "/videos/1564676714-pixar.mp4",
  },
  {
    logo: "/images/viewers-starwars.png",
    video: "/videos/1608229455-star-wars.mp4",
  },
];

export default function VideoGrid(props) {
  return (
    <Container>
      {viewers.map((viewer, i) => (
        <Viewer key={i}>
          <img src={viewer.logo} alt={viewer.logo} />
          <video
            src={viewer.video}
            autoPlay={true}
            loop={true}
            playsInline={true}
          />
        </Viewer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 92.1%;
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Viewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid rgba(150, 150, 150, 0.7);
  border-radius: 10px;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    width: 100%;
    object-fit: cover;
    z-index: 3;
  }

  video {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    /* z-index: -1; */
  }
  &:hover {
    transform: scale(1.05);
    video {
      opacity: 1;
    }
  }
`;
