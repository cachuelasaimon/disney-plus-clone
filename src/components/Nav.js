import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

// Material UI //
import { Home, Search, Add, Star, Movie, LiveTv } from "@material-ui/icons";

// REDUX //
import { checkUserSession, loginStart, logoutStart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const mapState = ({ auth }) => ({
  currentUser: auth.currentUser,
});

const NavOptions = [
  { name: "home", Icon: Home },
  { name: "search", Icon: Search },
  { name: "watchlist", Icon: Add },
  { name: "originals", Icon: Star },
  { name: "movies", Icon: Movie },
  { name: "series", Icon: LiveTv },
];

export default function Navbar(props) {
  // const [currentUser, setCurrentUser] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setActiveBtn("home");
    dispatch(checkUserSession());
  }, []);

  useEffect(() => {
    if (currentUser) {
      history.push("/home");
    }
  }, [currentUser]);

  const handleLogin = () => {
    dispatch(loginStart());
  };
  const handleLogout = () => {
    dispatch(logoutStart());
  };
  const handleRedirect = (name) => {
    setActiveBtn(name);
    if (name === "home") {
      history.push("/home");
    }
  };
  return (
    <Nav>
      <Wrap>
        <DisneyLogo src="/images/logo.svg" />
        {!currentUser && <Login onClick={handleLogin}>Login</Login>}
        {currentUser && (
          <>
            {/* Options */}
            <ButtonGrid>
              {NavOptions &&
                NavOptions.map(({ name, Icon }, i) => (
                  <NavBtn
                    className={`${activeBtn === name ? "active" : ""}`}
                    onClick={() => handleRedirect(name)}
                    key={i}
                  >
                    <Icon />
                    <span>{name}</span>
                  </NavBtn>
                ))}
            </ButtonGrid>

            <UserProfile>
              <img src={currentUser.photoURL} alt="user-profile" />

              <a onClick={handleLogout}>Sign Out</a>
            </UserProfile>
          </>
        )}
      </Wrap>
    </Nav>
  );
}

const Nav = styled.nav`
  z-index: 10000;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.2rem 0;
  background: #090b13;
`;

const Wrap = styled.div`
  width: 92.1%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DisneyLogo = styled.img`
  height: 3.8rem;
`;

const Login = styled.a`
  cursor: pointer;
  padding: 1rem;
  text-transform: uppercase;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-size: bold;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  border: 1px solid #f9f9f9;
  background: rgb(5, 5, 5);

  &:hover {
    background: #f9f9f9;
    color: #040714;
  }

  &:active {
    background: rgb(5, 5, 5);
    color: #f9f9f9;
  }
`;

const ButtonGrid = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-left: 3rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  /* padding: 0.5rem; */
  height: 100%;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: #f9f9f9;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.1rem;
  }

  span {
    padding-top: 0.1rem;
    margin-left: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  }

  &:hover {
    span {
      /* transform: scale(1.05); */
      margin-left: 0.3rem;
      letter-spacing: 2.5px;
      border-bottom: 1px solid #f9f9f9;
    }
  }
  &:active,
  &.active:active {
    span {
      margin-left: 0.3rem;
      letter-spacing: 2.5px;
      border-bottom: none;
    }
  }

  &.active {
    span {
      margin-left: 0.3rem;
      letter-spacing: 2.5px;
      border-bottom: 1px solid #f9f9f9;
    }
  }
`;

const UserProfile = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  img {
    height: 2.5rem;
    border-radius: 50%;
  }
  a {
    position: absolute;
    top: 3.5rem;
    right: 0.5rem;
    z-index: 1000;
    padding: 0.5rem 1rem;
    background: rgb(19, 19, 19);
    border: 1px solid gray;
    border-radius: 5px;
    letter-spacing: 1.5px;
    transform: scale(0);
    transition: all 0.15s ease-in-out;
  }
  &:hover {
    a {
      transform: scale(1);
    }
  }
`;
