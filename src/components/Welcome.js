import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../assets/bg.png";

const Welcome = () => {
  return (
    <Container>
      <Wrapper>
        <Hello>
          <p>Welcome to my page!</p>
          <Link to="/">
            <button>Back To Login</button>
          </Link>
        </Hello>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  height: 100vh;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hello = styled.div`
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 300px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;

  p {
    font-size: 25px;
    font-weight: 900;
    color: #343434;
  }
  button {
    width: 80%;
    border: none;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    margin: 1rem 0;
    box-shadow: 0px 14px 31px -23px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export default Welcome;
