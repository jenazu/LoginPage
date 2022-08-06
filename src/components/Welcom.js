import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.png";

const Welcom = () => {
  return (
    <Container>
      <Wrapper>
        <Hello>
          <p>Welcome to my page!</p>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  p {
    font-size: 25px;
    font-weight: 900;
    color: #343434;
  }
`;

export default Welcom;
