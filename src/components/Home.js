import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/// Components ///
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import DisplayMovies from "./DisplayMovies";

/// REDUX ///
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesStart, checkUserSession } from "../redux/actions";
const mapState = ({ movies, user }) => ({
  movies: movies,
  user: user,
});

const Home = (props) => {
  const { movies, user } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMoviesStart());
    dispatch(checkUserSession());
  }, []);

  // useEffect(() => {
  //   if (!user) history.push("/");
  // }, [user]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      {movies.recommends && (
        <DisplayMovies
          movies={movies.recommends}
          sectionHeader="Recommended For You"
        />
      )}
      {movies.newDisney && (
        <DisplayMovies
          movies={movies.newDisney}
          sectionHeader="New To Disney+"
        />
      )}
      {movies.originals && (
        <DisplayMovies movies={movies.originals} sectionHeader="Originals" />
      )}
      {movies.trending && (
        <DisplayMovies movies={movies.trending} sectionHeader="Trending" />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 4rem;
  height: auto;
  min-height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("images/home-background.png");
  background-position: center;
  display: flex;
  flex-direction: column;
`;

export default Home;
