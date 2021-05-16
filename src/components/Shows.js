import React from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

// hooks
import { useFirestore } from "../hooks";

export default function Shows({ type, label }) {
  const { docs } = useFirestore("movies", type);
  const history = useHistory();

  //   useEffect(() => {
  //     if (docs) {
  //       console.log(docs);
  //     }
  //   }, [docs]);

  //   const handleRedirect = (showID) => {
  //     history.push({
  //       pathname: `/`,
  //     });
  //   };
  return (
    <Container>
      <h3>{label}</h3>
      <ShowGrid>
        {docs &&
          docs.length > 1 &&
          docs.map((show, i) => (
            <Show
              // onClick={() => handleRedirect(show.id)}
              key={i}
            >
              <Link to={`/details/${show.id}`}>
                <img src={show.cardImg} alt={show.title} />
              </Link>
            </Show>
          ))}
      </ShowGrid>
    </Container>
  );
}

const Container = styled.div`
  margin: 3rem auto 0;
  width: 92.1%;
  height: auto;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  h3 {
    letter-spacing: 1.5px;
  }
`;

const ShowGrid = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Show = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(150, 150, 150, 0.7);
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 2px solid #f9f9f9;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }
`;
