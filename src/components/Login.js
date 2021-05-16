import React from "react";
import styled from "styled-components";

export default function Login(props) {
  return (
    <Container>
      <Content>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <Button>Get all there</Button>
        <PromoText>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 05/02/2021, the price of Disney
          Bundle will increase by $1.
        </PromoText>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  @media (min-width: 769px) {
    width: 50%;
  }
`;

const CTALogoOne = styled.img`
  background-attachment: fixed;
`;

const Button = styled.a`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  font-size: 1.3rem;
  font-size: bolder;
  margin-top: 0.5rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #1145ff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #2d83ed;
  }
  &:active {
    background-color: #4796f7;
  }
`;

const PromoText = styled.p`
  margin-top: 0.5rem;
  line-height: 1.5rem;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  background-attachment: fixed;
  margin-top: 1rem;
`;
