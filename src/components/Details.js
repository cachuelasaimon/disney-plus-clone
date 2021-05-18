import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useFirestoreDoc } from "../hooks";

/// Material UI ///
import { IconButton, Button } from "@material-ui/core";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PlusIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/PeopleAlt";

export default function Details(props) {
  const { id } = useParams();
  const { doc } = useFirestoreDoc(`movies/${id}`);
  useEffect(() => {
    if (doc) {
      console.log(doc);
    }
  }, [doc]);
  return (
    <>
      {doc && (
        <Container style={{ backgroundImage: `url("${doc.backgroundImg}")` }}>
          <Overlay />
          <Content>
            <Title>
              <img src={doc.titleImg} alt={doc.title} />
            </Title>
            <ButtonGrid>
              <Button
                size="medium"
                className="play-btn"
                startIcon={<PlayIcon />}
              >
                Play
              </Button>
              <Button
                size="medium"
                className="trailer-btn"
                startIcon={<PlayIcon />}
              >
                trailer
              </Button>

              <IconButton className="icon-btn">
                <PlusIcon />
              </IconButton>

              <IconButton className="icon-btn">
                <PeopleIcon />
              </IconButton>
            </ButtonGrid>

            <Subtitle>{doc.subtitle}</Subtitle>
            <Description>{doc.description}</Description>
          </Content>
        </Container>
      )}
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  min-height: 70vh;
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  background-position-x: left;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  z-index: 3;
  width: 92.1%;
  height: auto;
  margin: 0 auto;
`;

const Title = styled.div`
  z-index: 3;
  max-width: 550px;
  margin: 6rem auto 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    margin: 6rem auto 0;
  }
`;

const ButtonGrid = styled.div`
  z-index: 3;
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;

  .play-btn {
    margin-right: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background: #f9f9f9;
    border: 1px solid #f9f9f9;
    font-weight: bold;
    letter-spacing: 1.5px;

    &:hover {
      color: #f9f9f9;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  .trailer-btn {
    margin-right: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: #f9f9f9;
    border: 1px solid #f9f9f9;
    font-weight: bold;
    letter-spacing: 1.5px;

    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .icon-btn {
    margin-right: 0.5rem;
    border: 1.5px solid #f9f9f9;
    color: #f9f9f9;
    background-color: rgba(0, 0, 0, 0.3);

    &:hover {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;

const Subtitle = styled.p`
  z-index: 3;
  margin-top: 1rem;
  color: white;
  letter-spacing: 2px;
  font-size: 0.8rem;
  @media (max-width: 768px) and (min-width: 420px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  z-index: 3;
  width: 70%;
  margin-top: 1rem;
  color: white;
  text-align: justify;
  line-height: 2rem;
  font-size: 1.1rem;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 768px) and (min-width: 420px) {
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;
