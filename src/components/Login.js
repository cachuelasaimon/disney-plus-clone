import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/// Components ///
import SignUpBtn from "./Signup";

/// REDUX ///
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "../redux/actions";
const mapState = ({ user }) => ({
  user: user.user,
});

const Login = (props) => {
  const { user } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    if (user) history.push("/home");
  }, [user]);

  return (
    <Container>
      <BGImage />
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUpBtn />
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 05/02/2021, the price of Disney
            Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BGImage = styled.div`
  background-image: url("images/login-background.jpg");
  background-attachment: fixed;
  /* background-position-x: center; */
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  min-height: 1px;
  margin-bottom: 12px;
  display: block;
  transition: all 0.3s ease-out;
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 650px;
  display: inline-block;
  vertical-align: bottom;
`;

const Description = styled.p`
  width: 100%;
  max-width: 650px;
  color: hsla(0, 0%, 95.3%, 1);
  margin: 12px 0 20px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

export default Login;
