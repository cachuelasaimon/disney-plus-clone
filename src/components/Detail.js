import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

/// REDUX ///
import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "../redux/actions";
const mapState = ({ movies, user }) => ({
  movies: movies.allMovies,
  user: user,
});

const Detail = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const { movies, user } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (!user) dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    if (!user) history.push("/");
  }, [user]);

  useEffect(() => {
    if (movies && id)
      setSelectedMovie(...movies.filter((movie) => movie.id === id));
  }, [movies]);

  useEffect(() => {
    if (selectedMovie) console.log(selectedMovie);
  }, [selectedMovie]);

  return (
    <Container
    // style={{
    //   backgroundImage: `url('${selectedMovie.backgroundImg}')`,
    // }}
    >
      {selectedMovie && (
        <>
          <BGImage src={selectedMovie.backgroundImg} />
          <Title>
            <img src={selectedMovie.titleImg} alt={selectedMovie.title} />
            <Buttons>
              <ButtonGrid>
                <PlayButton>
                  <img
                    className="white-play-btn"
                    src="/images/play-icon-white.png"
                    alt="play-button"
                  />
                  <img
                    className="black-play-btn"
                    src="/images/play-icon-black.png"
                    alt="play-button"
                  />
                  Play
                </PlayButton>
                <TrailerButton>
                  <img
                    className="white-play-btn"
                    src="/images/play-icon-white.png"
                    alt="play-button"
                  />
                  <img
                    className="black-play-btn"
                    src="/images/play-icon-black.png"
                    alt="play-button"
                  />
                  Trailer
                </TrailerButton>
                <PlusButton>+</PlusButton>
              </ButtonGrid>
              <ButtonGrid>
                <GroupsButton>
                  <img src="/images/group-icon.png" />
                </GroupsButton>
              </ButtonGrid>
            </Buttons>
            <Subtitle>{selectedMovie.subtitle}</Subtitle>
            <Description>{selectedMovie.description}</Description>
          </Title>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-position: center;
`;

const BGImage = styled.img`
  margin-top: 3rem;
  min-height: 100vh;
  background-attachment: fixed;
  background-position-x: right;
  position: fixed;
  z-index: -1;
  opacity: 0.8;
  /* overflow: hidden; */
`;

const Title = styled.div`
  position: relative;
  margin: 0 auto;
  top: 8rem;
  width: 92%;
  height: auto;
  display: flex;
  flex-direction: column;

  img {
    max-width: 32rem;
  }
`;

const Buttons = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  margin: 1.5rem auto 1rem;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
const ButtonGrid = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

const PlayButton = styled.a`
  font-size: 0.9rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.7rem 1.5rem 0.7rem 1rem;
  border-radius: 4px;
  text-transform: uppercase;
  margin-right: 1rem;
  border: 1px solid white;
  transition: all 0.2s ease;
  background: white;
  color: black;

  .white-play-btn {
    max-height: 1.5rem;
    opacity: 0;
    position: relative;
    transition: all 0.2s ease;
  }
  .black-play-btn {
    max-height: 1.5rem;
    position: absolute;
    opacity: 1;
    transition: all 0.2s ease;
    z-index: 2;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.4);
    color: white;
    .white-play-btn {
      opacity: 1;
    }
    .black-play-btn {
      opacity: 0;
    }
  }
`;

const TrailerButton = styled.a`
  font-size: 0.9rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.7rem 1.5rem 0.7rem 1rem;
  border-radius: 4px;
  text-transform: uppercase;
  margin-right: 1rem;
  border: 1px solid white;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.4);
  color: white;

  .white-play-btn {
    max-height: 1.5rem;
    opacity: 1;
    position: relative;
    transition: all 0.2s ease;
  }
  .black-play-btn {
    max-height: 1.5rem;
    position: absolute;
    opacity: 0;
    transition: all 0.2s ease;
    z-index: 2;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const PlusButton = styled.a`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 0.8rem;
  border-radius: 50%;
  text-transform: uppercase;
  margin-right: 1rem;
  border: 1px solid white;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.4);
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const GroupsButton = styled.a`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0rem 0.4rem;
  border-radius: 50%;
  text-transform: uppercase;
  margin-right: 1rem;
  border: 1px solid white;
  transition: all 0.2s ease;
  background: rgba(0, 0, 0, 0.4);
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 420px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Subtitle = styled.p`
  width: 98%;
  margin: 0.5rem auto;
  letter-spacing: 1.5px;
  color: white;
  font-size: 13px;
`;

const Description = styled.p`
  width: 80%;
  margin-right: auto;
  margin-left: 0.6rem;
  /* letter-spacing: 1px; */
  color: white;
  line-height: 2rem;
  /* font-size: 2px; */
`;

export default Detail;
