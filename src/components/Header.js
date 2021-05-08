import React, { useEffect, useState } from "react";
import styled from "styled-components";

/// Routing ///
import { useHistory } from "react-router-dom";

/// REDUX ///
import { useDispatch, useSelector } from "react-redux";
import { signUpStart, logout, checkUserSession } from "../redux/actions";
const mapState = ({ user }) => ({
  user: user.user,
});

const Header = () => {
  const { user } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  /// Handlers ///
  const handleAuth = () => {
    user ? dispatch(logout()) : dispatch(signUpStart());
  };
  useEffect(() => {}, []);
  useEffect(() => {
    if (!user) history.push("/");
  }, [user]);

  // Mount & Redux Triggered Events ///
  const handleLink = (link) => {
    history.push(link);
  };

  return (
    <Nav>
      <DisneyLogo>
        <img src="/images/logo.svg" alt="disney-logo" />
      </DisneyLogo>

      {user && (
        <>
          <NavMenu>
            {/* Home */}
            <MenuItem onClick={() => handleLink("/home")}>
              <img src="/images/home-icon.svg" alt="home-icon" />
              <span>Home</span>
            </MenuItem>

            {/* Search */}
            <MenuItem>
              <img src="/images/search-icon.svg" alt="search-icon" />
              <span>Search</span>
            </MenuItem>

            {/* Watchlist */}
            <MenuItem>
              <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
              <span>Watchlist</span>
            </MenuItem>

            {/* Originals */}
            <MenuItem>
              <img src="/images/original-icon.svg" alt="original-icon" />
              <span>Originals</span>
            </MenuItem>

            {/* Movies */}
            <MenuItem>
              <img src="/images/movie-icon.svg" alt="movies-icon" />
              <span>Movies</span>
            </MenuItem>

            {/* Series */}
            <MenuItem>
              <img src="/images/series-icon.svg" alt="series-icon" />
              <span>Series</span>
            </MenuItem>
          </NavMenu>
        </>
      )}
      {!user ? (
        <LoginBtn onClick={handleAuth}> Login </LoginBtn>
      ) : (
        // <LogoutBtn onClick={handleLogout}> Logout </LogoutBtn>
        <Profile>
          <UserImg src={user.photoURL} alt="user-profile" />
          <Dropdown>
            <span onClick={handleAuth}> Sign out</span>
          </Dropdown>
        </Profile>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  padding: 0 36px;
  background-color: #090b13;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const DisneyLogo = styled.a`
  max-height: 5rem;
  width: 7rem;
  margin: 4px;
  font-size: 0;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 1rem;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      white-space: nowrap;
      position: relative;
      margin-left: 3px;

      &:before {
        background-color: rgb(249, 249, 249);
        z-index: 500;
        border-radius: 0 0 4px 4px;
        position: absolute;
        bottom: -6px;
        right: 0px;
        left: 0px;
        height: 2px;
        width: auto;
        content: "";
        opacity: 1;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        /* transition: all 0.25s ease-in-out; */
        visibility: hidden;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const LoginBtn = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  padding: 0.5rem;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    border: transparent;
    color: #090b13;
  }
`;

const LogoutBtn = styled.a`
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  padding: 0.5rem;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    border: transparent;
    color: #090b13;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  right: 1rem;
  top: 3.5rem;
  padding: 0.5rem;
  letter-spacing: 2px;
  background: rgb(19, 19, 19);
  cursor: pointer;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0.4);
  transition: all 0.2s ease;
  opacity: 0;
  transform: scale(0);
  /* display: none; */
`;

const UserImg = styled.img`
  cursor: pointer;
  max-height: 2.5rem;
  border-radius: 50%;
`;

const Profile = styled.div`
  &:hover {
    ${Dropdown} {
      /* display: block; */
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const MenuItem = styled.a`
  /* transition: all 02s ease-in-out !important;
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
  img {
    height: 25px;
    margin-right: 5px;
  }
  span {
    text-transform: uppercase;
    font-family: "Avenir-Roman";
    font-weight: bold;
    letter-spacing: 1.5px;
    margin: 0;
    padding-top: 5px;
    transition: all 1s ease-in-out;
  }
  &:hover {
    span {
      border-bottom: solid 1px #f9f9f9;
    }
  } */
`;

export default Header;
