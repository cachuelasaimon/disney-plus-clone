import React from "react";
import styled from "styled-components";

// Components
import Carousel from "./Carousel";
import Viewers from "./VideoGrid";
import Shows from "./Shows";

const categories = [
  { type: "recommends", label: "Recommended For You" },
  { type: "new", label: "New To Disney +" },
  { type: "original", label: "Originals" },
  { type: "trending", label: "Trending" },
];

export default function Home(props) {
  return (
    <Container>
      {/* Carousel */}
      <Carousel />
      {/* Video grids */}
      <Viewers />
      {/* Shows */}
      {categories.map((category) => (
        <Shows key={category.type} {...category} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  padding-top: 5rem;
  background: url("/images/home-background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  z-index: -5;
`;
