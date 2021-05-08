import React from "react";
import styled from "styled-components";

const SignUp = (props) => {
  return <SignUpBtn>Get All There</SignUpBtn>;
};

const SignUpBtn = styled.button`
  // Text Fomrn
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bolder;
  font-size: 1.2rem;
  color: #f9f9f9;
  height: auto;
  padding: 1.5rem;
  width: 100%;
  max-width: 650px;
  background-color: #0063e5;
  border: solid transparent;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #0483ee;
  }
`;

export default SignUp;
