import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewDisney = (props) => {
  const { movies, sectionHeader } = props;
  return (
    <Container>
      <h3> {sectionHeader} </h3>

      <Content>
        {movies &&
          movies.map((movie, i) => (
            <Wrap key={i}>
              <Link to={`/details/${movie.id}`}>
                <img src={movie.cardImg} alt={`${movie.title}`} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 92%;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: auto;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    display: block;
    inset: 0px;
    object-fit: cover;
    border-radius: 5px;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
    transition: opacity 0.5s ease-in-out 0s;
    z-index: 1;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.03);
    /* border: 2px solid white; */
    border-color: rgb(249, 249, 249, 0.8);
  }
`;

export default NewDisney;
